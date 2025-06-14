
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product, ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone:false
})
export class Tab1Page implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;

  products: Product[] = []; // Produtos que ESTÃO SENDO EXIBIDOS
  private allProducts: Product[] = []; // TODOS os produtos carregados da API
  private productsPerPage = 10; // Quantos produtos carregar por "página" (no frontend)
  private currentPage = 0; // Para controlar quais produtos exibir

  isLoading = false;
  error: string | null = null;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    console.log('ngOnInit: Chamando loadAllProductsThenDisplay');
    this.loadAllProductsThenDisplay();
  }

  loadAllProductsThenDisplay() {
    this.isLoading = true;
    this.error = null;
    console.log('loadAllProductsThenDisplay: Iniciando carregamento de todos os produtos...');
    this.productService.getProducts().subscribe({
      next: (data) => {
        console.log('loadAllProductsThenDisplay: Dados recebidos da API:', data);
        this.allProducts = data; // Armazena todos os produtos
        this.isLoading = false;
        console.log('loadAllProductsThenDisplay: allProducts setado. Quantidade:', this.allProducts.length);

        if (this.allProducts.length > 0) {
            this.displayNextProducts(); // Começa a exibir os primeiros produtos
            console.log('loadAllProductsThenDisplay: Chamando displayNextProducts.');
        } else {
            this.error = 'Nenhum produto encontrado.';
            console.log('loadAllProductsThenDisplay: NENHUM produto encontrado na API.');
        }
      },
      error: (err) => {
        console.error('Error fetching all products:', err);
        this.error = 'Não foi possível carregar os produtos iniciais. Tente novamente mais tarde.';
        this.isLoading = false;
      }
    });
  }

  displayNextProducts(event?: any) {
    console.log('displayNextProducts: Chamado. products.length:', this.products.length, 'allProducts.length:', this.allProducts.length);

    if (this.products.length === this.allProducts.length && this.products.length > 0) {
      console.log('displayNextProducts: Todos os produtos já foram exibidos.');
      if (event) {
        event.target.complete();
        event.target.disabled = true;
      }
      return;
    }

    const startIndex = this.currentPage * this.productsPerPage;
    const endIndex = startIndex + this.productsPerPage;
    const productsToAdd = this.allProducts.slice(startIndex, endIndex);

    this.products = [...this.products, ...productsToAdd]; // Adiciona ao array de exibição
    this.currentPage++; // Prepara para a próxima "página"

    console.log('displayNextProducts: Produtos adicionados. products.length agora:', this.products.length);

    if (event) {
      event.target.complete();
      if (this.products.length === this.allProducts.length) {
        event.target.disabled = true;
        console.log('displayNextProducts: Infinite scroll desabilitado. Todos os produtos carregados.');
      }
    }
  }

  loadMoreProducts(event: any) {
    console.log('loadMoreProducts: Evento de infinite scroll disparado.');
    this.displayNextProducts(event);
  }

  viewProductDetails(id: number) {
    console.log('viewProductDetails: Navegando para detalhes do produto com ID:', id);
    this.router.navigate(['/tabs/tab2', id]);
  }
}


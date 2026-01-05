import './style.css'

const products = [
  {
    id: 1,
    name: "Essential Graphic Tee",
    price: 45,
    category: "tees",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Grey"],
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800",
    fit: "Oversized Fit"
  },
  {
    id: 2,
    name: "Premium Hoodie",
    price: 89,
    category: "hoodies",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Olive"],
    image: "https://images.pexels.com/photos/8148586/pexels-photo-8148586.jpeg?auto=compress&cs=tinysrgb&w=800",
    fit: "Regular Fit"
  },
  {
    id: 3,
    name: "Classic Polo Shirt",
    price: 65,
    category: "polo",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy", "Red"],
    image: "https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg?auto=compress&cs=tinysrgb&w=800",
    fit: "Regular Fit"
  },
  {
    id: 4,
    name: "Premium Denim Jeans",
    price: 85,
    category: "jeans",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Dark Blue", "Light Blue", "Black"],
    image: "https://images.pexels.com/photos/5702424/pexels-photo-5702424.jpeg?auto=compress&cs=tinysrgb&w=800",
    fit: "Slim Fit"
  },
  {
    id: 5,
    name: "Utility Cargo Pants",
    price: 79,
    category: "cargo",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Khaki", "Black", "Olive"],
    image: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=800",
    fit: "Relaxed Fit"
  },
  {
    id: 6,
    name: "Premium Singlet Tank",
    price: 35,
    category: "singlets",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Grey"],
    image: "https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg?auto=compress&cs=tinysrgb&w=800",
    fit: "Regular Fit"
  },
  {
    id: 7,
    name: "Traditional English Shirt",
    price: 95,
    category: "english",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Blue", "Pink"],
    image: "https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg?auto=compress&cs=tinysrgb&w=800",
    fit: "Slim Fit"
  },
  {
    id: 8,
    name: "Vintage Graphic Tee",
    price: 52,
    category: "tees",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Cream", "Brown"],
    image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800",
    fit: "Regular Fit"
  },
  {
    id: 9,
    name: "Tech Fleece Hoodie",
    price: 99,
    category: "hoodies",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Grey", "Navy"],
    image: "https://images.pexels.com/photos/8148586/pexels-photo-8148586.jpeg?auto=compress&cs=tinysrgb&w=800",
    fit: "Slim Fit"
  },
  {
    id: 10,
    name: "Designer Polo",
    price: 125,
    category: "polo",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Navy", "White"],
    image: "https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg?auto=compress&cs=tinysrgb&w=800",
    fit: "Regular Fit"
  },
  {
    id: 11,
    name: "Skinny Fit Jeans",
    price: 75,
    category: "jeans",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Black", "Dark Blue", "Grey"],
    image: "https://images.pexels.com/photos/5702424/pexels-photo-5702424.jpeg?auto=compress&cs=tinysrgb&w=800",
    fit: "Skinny Fit"
  },
  {
    id: 12,
    name: "Multi-Pocket Cargo Shorts",
    price: 62,
    category: "cargo",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Khaki", "Black"],
    image: "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=800",
    fit: "Relaxed Fit"
  },
  {
    id: 13,
    name: "Athletic Singlet",
    price: 40,
    category: "singlets",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Navy"],
    image: "https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg?auto=compress&cs=tinysrgb&w=800",
    fit: "Slim Fit"
  },
  {
    id: 14,
    name: "Oxford Button-Down",
    price: 88,
    category: "english",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Blue", "Cream"],
    image: "https://images.pexels.com/photos/3622613/pexels-photo-3622613.jpeg?auto=compress&cs=tinysrgb&w=800",
    fit: "Regular Fit"
  },
  {
    id: 15,
    name: "Premium Leather Belt",
    price: 55,
    category: "more",
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Tan"],
    image: "https://images.pexels.com/photos/4389727/pexels-photo-4389727.jpeg?auto=compress&cs=tinysrgb&w=800",
    fit: "One Size Fits All"
  },
  {
    id: 16,
    name: "Wool Knit Sweater",
    price: 110,
    category: "more",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Grey", "Cream"],
    image: "https://images.pexels.com/photos/1690293/pexels-photo-1690293.jpeg?auto=compress&cs=tinysrgb&w=800",
    fit: "Regular Fit"
  }
];

let currentFilter = 'all';
const selectedOptions = {};

function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.category === filter);

  grid.innerHTML = filteredProducts.map(product => `
    <div class="product-card" data-id="${product.id}">
      <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">$${product.price}</p>
        <button class="btn-whatsapp-product quick-view-btn" data-product-id="${product.id}">
          Quick View
        </button>
      </div>
    </div>
  `).join('');

  setupProductInteractions();
}

function openQuickViewModal(productId) {
  const product = products.find(p => p.id == productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  document.getElementById('modalImage').src = product.image;
  document.getElementById('modalImage').alt = product.name;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalPrice').textContent = `$${product.price}`;
  document.getElementById('modalFit').textContent = product.fit;

  const sizesContainer = document.getElementById('modalSizes');
  sizesContainer.innerHTML = product.sizes.map(size => `
    <button class="size-option" data-size="${size}" data-product="${productId}">${size}</button>
  `).join('');

  const colorsContainer = document.getElementById('modalColors');
  colorsContainer.innerHTML = product.colors.map(color => `
    <button class="color-option" data-color="${color}" data-product="${productId}">${color}</button>
  `).join('');

  const whatsappBtn = document.getElementById('modalWhatsAppBtn');
  whatsappBtn.dataset.productId = productId;
  whatsappBtn.href = "#"; // Reset href

  modal.style.display = 'flex';
  setupModalInteractions(productId);
}

function closeQuickViewModal() {
  const modal = document.getElementById('quickViewModal');
  modal.style.display = 'none';
}

function setupModalInteractions(productId) {
  const modal = document.getElementById('quickViewModal');

  document.querySelectorAll('#modalSizes .size-option').forEach(btn => {
    btn.addEventListener('click', function() {
      const container = this.parentElement;
      container.querySelectorAll('.size-option').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');

      if (!selectedOptions[productId]) selectedOptions[productId] = {};
      selectedOptions[productId].size = this.dataset.size;
    });
  });

  document.querySelectorAll('#modalColors .color-option').forEach(btn => {
    btn.addEventListener('click', function() {
      const container = this.parentElement;
      container.querySelectorAll('.color-option').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');

      if (!selectedOptions[productId]) selectedOptions[productId] = {};
      selectedOptions[productId].color = this.dataset.color;
    });
  });

  document.getElementById('modalWhatsAppBtn').onclick = function() {
    const product = products.find(p => p.id == productId);
    const options = selectedOptions[productId] || {};

    const size = options.size || 'Not selected';
    const color = options.color || 'Not selected';

    const pageUrl = window.location.href;

    const message = `Hi! I'm interested in:\n\nProduct: ${product.name}\nPrice: $${product.price}\nSize: ${size}\nColor: ${color}\n\nFrom: ${pageUrl}`;

    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    this.href = whatsappUrl;
  };
}

function setupProductInteractions() {
  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const productId = parseInt(this.dataset.productId);
      openQuickViewModal(productId);
    });
  });
}

function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const category = this.dataset.category;
      currentFilter = category;
      renderProducts(category);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupFilters();

  const modal = document.getElementById('quickViewModal');
  const closeBtn = document.querySelector('.modal-close');

  closeBtn.addEventListener('click', closeQuickViewModal);

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeQuickViewModal();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeQuickViewModal();
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});

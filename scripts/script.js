document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const products = this.parentElement.parentElement.querySelector('.products');
            products.style.display = products.style.display === 'none' ? 'block' : 'none';
            this.textContent = products.style.display === 'none' ? '+' : '-';
        });
    });

    const productos = {
        "Bebidas Frías": [
            { nombre: "Frappuccino de Dulce de leche", precio: "$0" },
            { id: 2, nombre: "Frappuccino de Oreo", precio: "$0" },
            { id: 3,nombre: "Frappuccino de Vainilla y Caramelo" , precio: "$0"},
            { id: 4,nombre: "Frappuccino de Chocolate" , precio: "$0"},
            { id: 5,nombre: "Frappuccino de Frutilla" , precio: "$0"},
            { id: 6,nombre: "Gaseosas" , precio: "$0"},
            { id: 7,nombre: "Agua/Agua con Gas" , precio: "$0"},
            { id: 8,nombre: "Agua Saborizada" , precio: "$0"},
            { id: 9,nombre: "Exprimido" , precio: "$0"},
            { id: 10,nombre: "Limonada" , precio: "$0" },
            { id: 11,nombre: "Licuado De Banana" , precio: "$0" },
            { id: 12,nombre: "Licuado con Frutas de Estacion" , precio: "$0" },
            // Agrega más productos aquí
        ],
        "Bebidas Calientes": [
            { id: 13,nombre: "Expresso Chico/Grande", precio: "$0" },
            { id: 14,nombre: "Cafe Con Leche", precio: "$0" },
            { id: 15,nombre: "Te En Saquito/Hebras" , precio: "$0" },
            { id: 16,nombre: "Cappucchino" , precio: "$0" },
            { id: 17,nombre: "Cappucchino Con Dulce De Leche" , precio: "$0" },
            { id: 18,nombre: "Lagrima" , precio: "$0" },
            { id: 19,nombre: "Cortado" , precio: "$0" },
            { id: 20,nombre: "Moka" , precio: "$0" },
            { id: 21,nombre: "Moka De Chocolate" , precio: "$0" },
            { id: 22,nombre: "Caramel Machiatto: Caramelo/Cafe/Leche y Vainilla" , precio: "$0" },
            { id: 23,nombre: "Coffie Nut: Cortado Con Nutela" , precio: "$0" },
            { id: 24,nombre: "Submarino" , precio: "$0" },
            // Agrega más productos aquí
        ],
        "Desayuno/Merienda": [
            { id: 25,nombre: "Tostadas: Mermelada/Queso/Manteca", precio: "$0" },
            { id: 26,nombre: "Alfajores", precio: "$0" },
            { id: 27,nombre: "Muffins", precio: "$0" },
            { id: 28,nombre: "Cuadrados", precio: "$0" },
            { id: 29,nombre: "Cookies", precio: "$0" },
            { id: 30,nombre: "Pepas", precio: "$0" },
            { id: 31,nombre: "Alfajores De Maicena", precio: "$0" },
            { id: 32,nombre: "Pastaflora", precio: "$0" },
            { id: 33,nombre: "MediaLunas", precio: "$0" },
            { id: 34,nombre: "Opciones Sin Tacc", precio: "$0" },
            { id: 35,nombre: "Waffles", precio: "$0" },
            { id: 36,nombre: "Yogurt Con Granola", precio: "$0" },
            { id: 37,nombre: "Hotcake", precio: "$0" },
            // Agrega más productos aquí
        ],
        "Salado": [
            { id: 38,nombre: "Tostado(Opcional Papas Fritas)", precio: "$0" },
            { id: 39,nombre: "Medialuna Rellena", precio: "$0" },
            { id: 40,nombre: "Focacchia Rellena", precio: "$0" },
            { id: 41,nombre: "Scones De Queso Relleno", precio: "$0" },
            { id: 42,nombre: "Trenza Judia", precio: "$0" },
            { id: 43,nombre: "Tipo Bagels", precio: "$0" },
            { id: 44,nombre: "Brusquetas", precio: "$0" },
            { id: 45,nombre: "Fosforitos", precio: "$0" },
            { id: 46,nombre: "Avocado Con Huevo Revuelto y Palta", precio: "$0" },
            { id: 47,nombre: "Lomito Completo", precio: "$0" },
            { id: 48,nombre: "Tartas", precio: "$0" },
            { id: 49,nombre: "Ensaladas", precio: "$0" },
            { id: 30,nombre: "Cremona Rellena", precio: "$0" },
            // Agrega más productos aquí
        ],
        "Tortas": [
            { id: 31,nombre: "Matilda", precio: "$0" },
            { id: 32,nombre: "Red Velvet", precio: "$0" },
            { id: 33,nombre: "Tiramisu", precio: "$0" },
            { id: 34,nombre: "Lemon Pie", precio: "$0" },
            { id: 35,nombre: "Moka", precio: "$0" },
            { id: 36,nombre: "Selva Negra", precio: "$0" },
            { id: 37,nombre: "Rogel", precio: "$0" },
            { id: 38,nombre: "Torta Bombom", precio: "$0" },
            { id: 39,nombre: "Manzana(Opcional Bocha de Helado)", precio: "$0" },
            { id: 40,nombre: "Brownie(Opcional Bocha de Helado)", precio: "$0" },
            { id: 41,nombre: "Cheesecake", precio: "$0" },
            { id: 42,nombre: "Carrot Cake", precio: "$0" },
            { id: 43,nombre: "Banana Split", precio: "$0" },
            { id: 44,nombre: "Chocotorta", precio: "$0" },
    
            // Agrega más productos aquí
        ],
    };

    function addProducts(categoryId, products) {
        const category = document.getElementById(categoryId.toLowerCase()); // Ajuste aquí
        const productsContainer = category.querySelector('.products');
        products.forEach(product => {
            const productElement = document.createElement('p');
            productElement.innerHTML = `${product.nombre} <span>${product.precio}</span>`;
            productsContainer.appendChild(productElement);
        });
    }

    // Agrega los productos a cada categoría
    for (const category in productos) {
        addProducts(category, productos[category]); // Ajuste aquí
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const sliceImages = document.querySelectorAll('.slice-image');
    let currentIndex = 0;

    // Ocultar todas las imágenes excepto la primera al cargar la página
    for (let i = 1; i < sliceImages.length; i++) {
        sliceImages[i].style.display = 'none';
    }

    setInterval(() => {
        sliceImages[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % sliceImages.length;
        sliceImages[currentIndex].style.display = 'block';
    }, 5000); // Cambiar de imagen cada 10 segundos (5000 milisegundos)
});






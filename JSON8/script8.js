fetch('data8.json')
    .then((response) => response.json())
    .then((data) => {
        const table = document.getElementById('orderList');
        const allorders = [];

        // Déplier les commandes et produits
        data.store.orders.forEach(order => {
            order.products.forEach(product => {
                allorders.push({ ...order, ...product });
                const typeprod = data.store.products.find(p => p.id === product.productId);
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${order.orderId}</td>
                    <td>${order.customer}</td>
                    <td>${order.date}</td>
                    <td>${order.totalAmount}</td>
                    <td>${order.status}</td>
                    <td>${typeprod ? `${typeprod.name} (qtt : ${product.quantity})` : 'Not found'}</td>
                `;
                table.appendChild(tr);
            });
        });

        
        const stat = document.getElementById('statusFilter');
        const amount = document.getElementById('amountFilter');
        const dat = document.getElementById('dateFilter');
        const sort = document.getElementById('sortFilter');
        const btn = document.getElementById('applyFilters');

        btn.addEventListener('click', () => {
            document.getElementById('orderList').innerHTML = '';
            let filtre = allorders.filter(e => 
                (stat.value === e.status || stat.value === '') &&
                (dat.value === e.date || dat.value === '') &&
                (amount.value === '' || 
                    (amount.value === 'lessThan1000' && e.totalAmount < 1000) ||
                    (amount.value === '1000to2000' && e.totalAmount >= 1000 && e.totalAmount <= 2000) ||
                    (amount.value === 'greaterThan2000' && e.totalAmount > 2000)
                )
            );

            
            if (sort.value === 'date-asc') {
                filtre.sort((a, b) => new Date(a.date) - new Date(b.date));
            } else if (sort.value === 'date-desc') {
                filtre.sort((a, b) => new Date(b.date) - new Date(a.date));
            } else if (sort.value === 'amount-asc') {
                filtre.sort((a, b) => a.totalAmount - b.totalAmount);
            } else if (sort.value === 'amount-desc') {
                filtre.sort((a, b) => b.totalAmount - a.totalAmount);
            }

            
            filtre.forEach(order => {
                const typeprod = data.store.products.find(p => p.id === order.productId);
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${order.orderId}</td>
                    <td>${order.customer}</td>
                    <td>${order.date}</td>
                    <td>${order.totalAmount}</td>
                    <td>${order.status}</td>
                    <td>${typeprod ? `${typeprod.name} (qtt : ${order.quantity})` : 'Not found'}</td>
                `;
                table.appendChild(tr);
            });
        });
    });

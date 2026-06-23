import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const productsData = [
  { id: 1, name: 'High Back Bench', price: 9.99, company: 'Ikea', image: 'https://picsum.photos/400/300?random=1' },
  { id: 2, name: 'Albany Table', price: 79.99, company: 'Marcos', image: 'https://picsum.photos/400/300?random=2' },
  { id: 3, name: 'Accent Chair', price: 25.99, company: 'Caressa', image: 'https://picsum.photos/400/300?random=3' },
  { id: 4, name: 'Wooden Table', price: 45.99, company: 'Liddy', image: 'https://picsum.photos/400/300?random=4' },
  { id: 5, name: 'Dining Table', price: 6.99, company: 'Ikea', image: 'https://picsum.photos/400/300?random=5' },
  { id: 6, name: 'Sofa Set', price: 69.99, company: 'Marcos', image: 'https://picsum.photos/400/300?random=6' },
  { id: 7, name: 'Modern Bookshelf', price: 8.99, company: 'Caressa', image: 'https://picsum.photos/400/300?random=7' },
  { id: 8, name: 'Emphasis Bed', price: 21.99, company: 'Liddy', image: 'https://picsum.photos/400/300?random=8' },
  { id: 9, name: 'Simple Sofa', price: 30.95, company: 'Ikea', image: 'https://picsum.photos/400/300?random=9' },
  { id: 10, name: 'Entertainment Center', price: 29.99, company: 'Marcos', image: 'https://picsum.photos/400/300?random=10' },
  { id: 11, name: 'Albany Sectional', price: 91.99, company: 'Caressa', image: 'https://picsum.photos/400/300?random=11' },
  { id: 12, name: 'Leather Sofa', price: 9.99, company: 'Liddy', image: 'https://picsum.photos/400/300?random=12' },
];

const companiesList = ['Ikea', 'Marcos', 'Caressa', 'Liddy'];

function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [maxPrice, setMaxPrice] = useState(850);

  const handleCompanyChange = (company) => {
    setSelectedCompanies(prev => 
      prev.includes(company)
        ? prev.filter(c => c !== company)
        : [...prev, company]
    );
  };

  const filteredProducts = productsData.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCompany = selectedCompanies.length === 0 || selectedCompanies.includes(product.company);
    const matchesPrice = product.price <= maxPrice;
    
    return matchesSearch && matchesCompany && matchesPrice;
  });

  return (
    <div className="products-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span> / </span>
        <span>Products</span>
      </div>

      <div className="products-layout">
        <div className="sidebar">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="filter-group">
            <h4>Company</h4>
            {companiesList.map(company => (
              <label key={company} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedCompanies.includes(company)}
                  onChange={() => handleCompanyChange(company)}
                />
                {company}
              </label>
            ))}
          </div>

          <div className="filter-group">
            <h4>Price</h4>
            <input 
              type="range" 
              min="0" 
              max="1000" 
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="range-input"
            />
            <p>Value: ${maxPrice}</p>
          </div>
        </div>

        <div className="products-list">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
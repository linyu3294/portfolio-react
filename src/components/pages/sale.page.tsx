import { useNavigate } from "react-router-dom";

const products = [
    { title: "Product 1", description: "This is an amazing product.", price: "$10", image: "https://images.unsplash.com/photo-1740137660661-274c804a891d?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", medium: "oil-paint" },
    { title: "Product 2", description: "You will love this one!", price: "$20", image: "https://images.unsplash.com/photo-1724889675304-4eb73c1c496e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", medium: "oil-paint" },
    { title: "Product 3", description: "Best seller of the year.", price: "$30", image: "https://images.unsplash.com/photo-1736912184128-0faf8d361efd?q=80&w=2269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", medium: "watercolor" },
    { title: "Product 4", description: "High quality and affordable.", price: "$40", image: "https://images.unsplash.com/photo-1736344398782-0107cd2ca611?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds-MN6nDwzIh30", medium: "watercolor" },
    { title: "Product 5", description: "One and only available.", price: "$50", image: "https://images.unsplash.com/photo-1736344398782-0107cd2ca611?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds-MN6nDwzIh30", medium: "graphite" },
    { title: "Product 4", description: "High quality and affordable.", price: "$40", image: "https://images.unsplash.com/photo-1736344398782-0107cd2ca611?q=80&w=2728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds-MN6nDwzIh30", medium: "ink" },
  ];
  

const Sale: React.FC = () => {

  const navigate = useNavigate();

  const proceedToPaymentOption = (product: typeof products[0]) => {
    navigate("/payment", {state: 
      { 
        isCommission: false, 
        isSale: true,
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image,
        medium: product.medium
      }
    });
  };

  return (
    <div className="page-container">
        <div className="cards-grid">
            {products.map((product, index) => (
                <div key={index} className="card">
                <img style={{ cursor: 'pointer' }} onClick={()=>proceedToPaymentOption(product)} src={product.image} alt={product.title} className="card-image" />
                    <div className="card-content">
                        <h2 className="card-title">{product.title}</h2>
                        <p className="card-description">{product.description}</p>
                        <p className="card-price">{product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Sale;

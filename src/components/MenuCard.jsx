function MenuCard ({name, description, price, image, tag}){
    return(
        <article className= "menu-card"> 
        <div className= "img-wrap">
            <img src= {image} alt={name} loading="lazy" />
            {tag && <span className="tag">{tag} </span>} 
        </div>
        <div className=" body">
            <div className="row">
                <h3>{name}</h3>
                <span className="price">{price}</span>
            </div>
            <p className="desc">{description}</p>
        </div>
        </article>

    );
}
export default MenuCard;
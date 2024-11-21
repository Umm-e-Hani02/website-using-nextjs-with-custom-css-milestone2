const ServicesCard = ({
    imageSrc,
    imageAlt,
    title,
    description
}:{
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
}) => {
    return(
        <div className="services-card">
            <img src={imageSrc} alt={imageAlt} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ServicesCard
import Image from 'next/image'

const ProjectCard = ({
  title,
  description,
  tools,
  links,
  image,
  showInverse
}) => {
  return (
    <div className="project-card">
      <div className={`project-card__details${showInverse ? '--inverse' : ''}`}>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
        <div className="project-card__tools">
          {tools.map((tool) => (
            <p key={tool}>{tool}</p>
          ))}
        </div>
        <div className="project-card__links">
          {Object.entries(links).map(([type, link]) => (
            <div key={type}>-</div>
          ))}
        </div>
      </div>
      <div className={`project-card__image${showInverse ? '--inverse' : ''}`}>
        <Image
          alt=""
          src={image}
          layout="fill"
          objectFit="cover"
          quality={100}
          // priority={true}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
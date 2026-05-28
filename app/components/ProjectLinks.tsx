interface ProjectLinksProps {
  github?: string;
  devpost?: string;
  writeup?: string;
  stopPropagation?: boolean;
}

export default function ProjectLinks({ github, devpost, writeup, stopPropagation = false }: ProjectLinksProps) {
  const handleClick = stopPropagation ? (e: React.MouseEvent) => e.stopPropagation() : undefined;

  return (
    <div className="project-links-row">
      {github && <a href={github} target="_blank" rel="noopener noreferrer" className="project-link" onClick={handleClick}>GitHub</a>}
      {devpost && <a href={devpost} target="_blank" rel="noopener noreferrer" className="project-link" onClick={handleClick}>Devpost</a>}
      {writeup && <a href={writeup} target="_blank" rel="noopener noreferrer" className="project-link" onClick={handleClick}>Write-up</a>}
    </div>
  );
}

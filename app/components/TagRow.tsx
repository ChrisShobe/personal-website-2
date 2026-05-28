interface TagRowProps {
  tags: string[];
}

export default function TagRow({ tags }: TagRowProps) {
  return (
    <div className="project-tag-row">
      {tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
    </div>
  );
}

export default function Button(props) {
  return (
    <a href={props.url} className="btn btn-primary">
     Go somewhere {/* which actually works*/}
    </a>
  );
}
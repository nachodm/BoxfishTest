import './NavbarLink.css'

function NavbarLink(props) {
  return (
        <a
          className="App-link"
          href={props.url}
        >
          {props.text}
        </a>
  );
}

export default NavbarLink;

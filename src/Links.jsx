import './styles/Links.css'
function Links(props) {
    return (
        <li className='link-card'><a className='link-web' href="#">{props.link}</a></li>
    );
}
export default Links
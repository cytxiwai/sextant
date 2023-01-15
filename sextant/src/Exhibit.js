const Exhibit = (props) => {
    return(
        <div className="m-2 w-25 bg-secondary d-inline-block float-start rounded">
        <h2>heading</h2>
        <h3>props {props.children}</h3>
        </div>
        )

}
export default Exhibit;
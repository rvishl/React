const MyComponent = (props) => {
    const styling = {
        backgroundColor: props.color,
        height: "100px",
        width: "100px",
        margin: "10px",
        display: "inline-block",
        borderRadius: "20px",
        border: "5px solid grey"
    }
    return (
        <div style={styling}></div>
    )
}

export default MyComponent;
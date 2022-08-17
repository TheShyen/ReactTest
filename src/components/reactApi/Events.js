export default function Events() {
    function enterHandler(e) {
        console.log(e);
        console.log(e.nativeEvent);
    }

    return (
        <div className="ev">
            <h1>Event area</h1>
            <div className="area" onPointerEnter={enterHandler} />
        </div>
    );
}

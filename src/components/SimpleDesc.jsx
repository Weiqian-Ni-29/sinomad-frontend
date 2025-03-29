function SimpleDesc( {width, paragraph} ) {
    return (
        <div style={{
            width: width,
            borderRadius: "20px",
            padding: "20px",
            backgroundColor: "#c09747",
            alignItems: "center",
            margin: "auto",
            marginTop: "0",
            marginBottom: "40px"
        }}>
            <p style={{color: 'white'}}>{paragraph != null && paragraph.replace(/\\n/g, '\n')}</p>
        </div>
    );
}

export default SimpleDesc;
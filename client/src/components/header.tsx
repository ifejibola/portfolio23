function IndexHeader() {
    return (
        <>
            <div
                className="page-header"
                style={{
                    backgroundImage: "url(" + ("images/photo2.jpg") + ")",
                }}
            >
                <div className="filter" />
                <div className="content-center">
                    <div className="motto">
                        <h1 className="text-center">Ife Ajibola</h1>
                        <h3 className="text-center">Software Engineer</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexHeader;
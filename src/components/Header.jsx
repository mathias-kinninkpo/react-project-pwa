function Header(){
    return (
        <div className="position-absolute d-inline-block w-100 mt-4 mx-4">
            <button onClick={() => window.history.back()} className="border no-border">Retour en arrière</button>
        </div>
    )
}

export default Header;
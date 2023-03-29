import cartwidget from "../cartwidget/cartwidget"
const navbar = () => {
     return(
        <nav>
            <h3>Ecomerce</h3>
            <div>
                <button>toyota supra</button>
                <button>nissan skyline</button>
                <button>mazda rx7</button>
            </div>
            <cartwidget />
        </nav>
     )

}

export default navbar
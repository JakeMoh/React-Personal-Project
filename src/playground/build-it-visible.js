// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false

class BuildItVisible extends React.Component {

    constructor(props) {
        super(props);
        this.changeIsDetailShown = this.changeIsDetailShown.bind(this);
        this.state = {
            isDetailShown: false
        };
    }

    changeIsDetailShown() {
        this.setState((prevState) =>  {
            return {
                isDetailShown: !prevState.isDetailShown
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.changeIsDetailShown}>{this.state.isDetailShown? "Hide details" : "Shown details"}</button>
                {this.state.isDetailShown && (
                    <div>
                        <p>Detail shown</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<BuildItVisible />, document.getElementById("app"));
// Converted to CLASS COMPONENT

import { Component } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";

function withRouter(Component) {
  function ComponentWithRouter(props) {
    let params = useParams();
    return <Component {...props} params={params} />;
  }
  return ComponentWithRouter;
}

class RefactoredProductFeatures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      features: {
        id: 0,
        name: "",
        details: [],
      },
    };
  }

  componentDidMount() {
    this.getData();
    this.setState({
      id: this.props.params.id,
    });
  }

  async getData() {
    let response = await fetch(`http://localhost:3030/products/${this.props.params.id}`);
    let resData = await response.json();
    this.setState({
      features: resData,
    });
  }

  render() {
    return (
      <>
        <NavBar />
        {console.log(this.state.features)}
        <section className="bg-white">
          <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {this.state.features.name}
              </h2>
              <p className="mt-4 text-gray-500">
                Naturally flavored Jamaican-style non-alcoholic ginger beer.
                Naturally flavored with ginger root extract, ginger beer is
                excellent on its own, served cold, on ice. It also gives a
                bright, spicy kick to mixed drinks! Try it with beer to make a
                delicious shady, with dark rum for a perfect storm or with vodka
                for Moscow mule! Create your own mixes and give your drink a
                kick!
              </p>

              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {this.state.features.details.map((feature) => (
                  <div
                    key={feature.name}
                    className="border-t border-gray-200 pt-4"
                  >
                    <dt className="font-medium text-2xl text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <img
                src="https://the-software-guild.s3.amazonaws.com/react/v2107/reactRefactorComponents02.jpg"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="bg-gray-100 rounded-lg"
              />
              <img
                src="https://the-software-guild.s3.amazonaws.com/react/v2107/reactRefactorComponents04.jpg"
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                className="bg-gray-100 rounded-lg"
              />
              <img
                src="https://the-software-guild.s3.amazonaws.com/react/v2107/reactRefactorComponents03.jpg"
                alt="Side of walnut card tray with card groove and recessed card area."
                className="bg-gray-100 rounded-lg"
              />
              <img
                src="https://the-software-guild.s3.amazonaws.com/react/v2107/reactRefactorComponents01.jpg"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="bg-gray-100 rounded-lg"
              />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(RefactoredProductFeatures);
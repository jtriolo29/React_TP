// Converted to CLASS COMPONENT

import { Component } from "react";
import NavBar from "../NavBar";

class RefactoredPromo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="relative bg-white overflow-hidden">
          <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
              <div className="sm:max-w-lg">
                <h1
                  className="text-4xl font font-extrabold tracking-tight text-gray-900 
                    sm:text-6xl capitalize"
                >
                  {this.props.headline}
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  {this.props.description}
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Image Grid*/}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
                  >
                    <div
                      className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 
                      lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
                    >
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                            <img
                              src={this.props.images[0]}
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                          <div className="w-44 h-64 rounded-lg overflow-hidden">
                            <img
                              src={this.props.images[1]}
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                        </div>

                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="w-44 h-64 rounded-lg overflow-hidden">
                            <img
                              src={this.props.images[2]}
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                          <div className="w-44 h-64 rounded-lg overflow-hidden">
                            <img
                              src={this.props.images[3]}
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                          <div className="w-44 h-64 rounded-lg overflow-hidden">
                            <img
                              src={this.props.images[4]}
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                        </div>

                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="w-44 h-64 rounded-lg overflow-hidden">
                            <img
                              src={this.props.images[5]}
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                          <div className="w-44 h-64 rounded-lg overflow-hidden">
                            <img
                              src={this.props.images[6]}
                              alt=""
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="/#"
                    className="inline-block text-center bg-blue-600 border border-transparent 
                      rounded-md py-3 px-8 font-medium text-white hover:bg-blue-700"
                  >
                    {this.props.callToAction}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default RefactoredPromo;

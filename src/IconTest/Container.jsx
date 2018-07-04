import React, { Component } from 'react';

import List from './List.jsx';
import IconSpan from './IconSpan.jsx';



const values = ['music', 'pictures', 'videos', 'contact']
// const icons = [
//     {
//         icon: '',
//         text: '',
//         onClick: '',
//         className: '',
//     },
//     {
//         icon: '',
//         text: '',
//         onClick: '',
//         className: '',
//     },
//     {
//         icon: '',
//         text: '',
//         onClick: '',
//         className: '',
//     }
// ]

// icons.map(v = (
//     <IconSpan 
//         icon={v.icon}
//         text={v.text}
//         onClick={v.onClick}
//         className={v.className}
//     />
// ))

class Container extends Component {
      state = {
          choosed: "music",
          className:'mine'

      }
    
    // handleClick = (k) => {
    //     this.setState({
    //         icon: k + '.jpg',
    //         choosed: values[k]
    //     })

    // }
   
    goMine = () => {
        alert('跳转我的页面')
    }

    render() {
        return (
            <div>
                {/* <List click={this.handleClick} value={values} choose={this.state.choosed} /> */}

                <IconSpan 
                    icon={"3.jpg"}
                    text={'我的'}
                    onClick={this.goMine}
                    className={this.state.className}
                />
                <IconSpan />
                <IconSpan />
            </div>

        )

    }
}



export default Container;
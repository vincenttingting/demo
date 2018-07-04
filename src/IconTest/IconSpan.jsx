import React,{ Component } from 'react';
import './style.css'

// // 2. 水平展示、垂直展示
// return (
//     <span>
//         icon
//         text
//     </span>
// )

// // 3. 可以兼容没有图标、没有文字
// <span>
//     icon ? 
//     text ?
// </span>


// class IconSpan extends Component {
//     render(){
//         const { 
//             className = '',
//             onClick=null,
//             icon='',
//             text='',
//             disbled=false
//         } = this.props

//         // 1. 简单的
//         return (
//             <span>
//                 icon
//                 text
//             </span>
//         )
//     }
// }

// 'icon-span' className
// type = 水平展示  垂直展示
class IconSpan extends Component{
    
    render(){
        const {
            className,
            onClick,
            // children=null
        } = this.props
        
        const icon = this.props.icon ? "<img src='" + this.props.icon + "' />" : ""; 
        const  text = this.props.text ? this.props.text : ""; 
        return(
            <div>
                <span onClick={onClick} className={className}>
                    <span dangerouslySetInnerHTML={{__html: icon}} />
                    {text}
                </span>
            </div>
        )
    }
}
export default IconSpan;

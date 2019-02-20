//import React from 'react'
//import ReactDOM from 'react-dom'

function Navbar() {
    return (
        <div className="Navbar">
            <nav className="wrapper">
                <div className="Title">Austinstagram</div>
                <div>
                    <input type="text" className="Search" placeholder="Search" />
                </div>
                <div>
                    <button className="LogInBtn">Log In</button>
                    <button className="SignUpBtn">Sign up</button>
                </div>
            </nav>
        </div>
    )
}

function InfoHeader({ img }) {
    return (
        <div className="InfoHeader wrapper">
            <img src={img} />
            <div>
                <h1>您好我是立翔～</h1>
                <h2>這是我的功能展示頁面（四）</h2>
                <h2>是一個以react建立的模仿instagram的網站</h2>
                <h2>3000.41m <span>followers</span></h2>
            </div>
        </div>
    )
}

class PicGrid extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        /*
        let pic = [];
        /*
        for (let i = 0; i < this.props.pics.length; i++) {
            pic.push(<Pic key={i} img={this.props.pics.img} hearts={this.props.pics.hearts} likes={this.props.pics.likes} updateModalStatus={this.props.updateModalStatus} />);
        }*/
        var pic=this.props.pics.map((pic, index) => (<Pic key={index} img={pic.img} hearts={pic.hearts} likes={pic.likes} updateModalStatus={this.props.updateModalStatus} />))

        return (
            <div className="PicGrid wrapper">
                {pic}

                {console.log(this.props.updateModalStatus)}
            </div>
            
        )
    }
}



class Pic extends React.Component {
    constructor(props) {
        super(props);
        this.picClicked = this.picClicked.bind(this);
    }
    picClicked(e) {
        e.stopPropagation();
        this.props.updateModalStatus(true, this.props.img);
    }

    render() {
        
        return (
            <div className="Pic" onClick={this.picClicked} style={{ background: `url(${this.props.img})`, backgroundSize: 'cover' }}>
                <h2>
                    <span><i className="fas fa-heart">{this.props.hearts}</i></span>
                    <span><i className="fas fa-comment">{this.props.likes}</i></span>
                    
                </h2>
            </div>
        )
    }
}


function Footer() {
    return (
        <footer className="Footer">
            <ul>
                <li><a href="./index.html"><h4>功能網站（一）</h4></a></li>
                <li><a href="./功能展示頁面2.html"><h4>功能網站（二）</h4></a></li>
                <li><a href="./功能展示頁面3.html"><h4>功能網站（三）</h4></a></li>
                <li><a href='./FakeInstagram.html'>功能展示頁面（四）</a></li>
                <li><a href='./功能展示網站5.html'>功能展示頁面（五）</a></li>
                <li><a href="https://thegreata.github.io/DcardProject/">Github Repos Searcher</a></li>
                <li><a href="https://www.cakeresume.com/austin-lin-91d921"><h4 className="copyright">關於我</h4></a></li>
            </ul>
        </footer>
    )
}

class Modal extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        document.querySelector('body').classList.add('stop-scroll')
    }

    componentWillUnmount(){
        document.querySelector('body').classList.remove('stop-scroll');
    }

    exitModal(e){
        e.preventDefault();
        e.stopPropagation();
        this.props.updateModalStatus(false);
    }

    clickInnerModal(e){
        e.stopPropagation();
    }

    render(){
        
        return(
            <div className="Modal" onClick={this.exitModal.bind(this)}>
                <div className="Modal-content" onClick={this.clickInnerModal.bind(this)}>
                    <img src={this.props.img} alt="怎麼會無法顯示！"/>
                    <div className="Modal-content-details">
                        <h2>立翔</h2>
                        <br/>
                        <p>Austin and 2000 people liked this picture</p>
                    </div>
                </div>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profilePic: './images/台南玩大頭貼.jpg',
            modalVisible: false,
            clickedImg: '',
            pics: [
                {
                    img: './images/igPic1.jpg',
                    likes: 748,
                    hearts: 5334
                },
                {
                    img: './images/igPic2.jpg',
                    likes: 234,
                    hearts: 6623
                },
                {
                    img: './images/igPic3.jpg',
                    likes: 334,
                    hearts: 3723
                },
                {
                    img: './images/igPic4.jpg',
                    likes: 834,
                    hearts: 6423
                },
                {
                    img: './images/igPic5.jpg',
                    likes: 1444,
                    hearts: 4223
                },
                {
                    img: './images/igPic6.jpg',
                    likes: 634,
                    hearts: 5223
                }
            ]
        }
        this.updateModalStatus = this.updateModalStatus.bind(this);

    }

    updateModalStatus(status, clickedImg) {
        this.setState({ modalVisible: status, clickedImg: clickedImg })
    }

    render() {
        return (
            <div className="App">
                <Navbar />
                <InfoHeader img={this.state.profilePic} />
                <PicGrid pics={this.state.pics} updateModalStatus={this.updateModalStatus} />
                <Footer />
                {this.state.modalVisible
                    ?<Modal img={this.state.clickedImg} updateModalStatus={this.updateModalStatus} />
                    :null}

            </div>
        )
    }
}

ReactDOM.render(<App></App>, document.getElementById("root"));
export default{
    sideBarActive:{
        bgcolor:'white',
        width:'397px',
        minHeight:'100vh',
        // bgcolor:'white',
        position: 'fixed',
        top: 0,
        left: '225px',
        zIndex:'2',
        transition:'0.5s',
        borderRadius:'0 20px 20px 0',
        boxShadow:'5px 0 10px 0 rgba(0,0,0,0.4)',
    },
    sideBarInActive:{  
        bgcolor:'white',
        width:'397px',
        minHeight:'100vh',
        // bgcolor:'white',
        position: 'fixed',
        top: 0,
        left: '-100%',
        zIndex:'0',
        transition:'0.5s',
    },
    sidebBarOverlayActive:{
        position:'fixed',
        top:0,
        left:'0',
        width:'100%',
        height:'100%',
        transition:'0.5s',
        opacity:1,
        visibility:'visible',
        // bgcolor:'rgba(0,0,0,0.2)',
        // border:'10px solid black'
    },
    sidebBarOverlayInActive:{
        position:'fixed',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        transition:'0.5s',
        opacity:0,
        visibility:'hidden',
        bgcolor:'blue'
    }
}
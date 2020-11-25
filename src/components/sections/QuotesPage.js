import React from "react";
import { Typography, Divider, Container, Link } from "@material-ui/core";
 const QuotesPage = () => {
     return (
         <Container maxWidth="sm">
             <br/>
             <header>
             
                 <Typography variant="h4" gutterBottom={true}>
                     Quotes About Music
                 </Typography>
             </header>
             <Divider/>
             <br/>
             <section>
             <img src="https://www.keepinspiring.me/wp-content/uploads/2020/08/music-is-the-emotional-life-of-most-people-leonard-cohen-quote-1024x1024.jpg" alt="Logo" height="550px"     margin-left= "auto"
    margin-right= "auto"
    display= "block" />
             <br/>
             <br/>

             {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
             <Typography gutterBottom={true} variant="subtitle1" component="div" style={{ backgroundColor: '#ffcac2', height: '15vh',fontStyle: "italic", textAlign:"left"
              }} >
               “Where words fail, music speaks.”
– Hans Christian Anderson
             </Typography>
             <Typography gutterBottom={true} variant="subtitle1" component="div" style={{ backgroundColor: '#d1cebd', height: '15vh',fontStyle: "italic", textAlign:"right"
              }} >
                “Without music, life would be a blank to me.”
– Jane Austen

             </Typography>
            <br/>
            <img src="https://www.keepinspiring.me/wp-content/uploads/2020/08/music-is-well-said-to-be-the-speech-of-angels-thomas-carlyle-quote-1024x1024.jpg" alt="Logo" height="550px" />
            <br/>
            <br/>
             <Typography gutterBottom={true} variant="subtitle1" component="div" style={{ backgroundColor: '#ffcac2', height: '15vh',fontStyle: "italic", textAlign:"left"
              }} >
                “Philosophy is the highest music.”
– Plato
             </Typography>
             <Typography gutterBottom={true} variant="subtitle1" component="div" style={{ backgroundColor: '#d1cebd', height: '15vh',fontStyle: "italic", textAlign:"right"
              }} >
                “Music is the moonlight in the gloomy night of life.”
– John Paul
             </Typography>
             <br/>
             <img src="https://www.keepinspiring.me/wp-content/uploads/2020/08/music-can-change-the-world-ludwig-van-beethoven-quote-1024x1024.jpg" alt="Logo" height="550px" />
             <br/>
             <br/>
             <Typography gutterBottom={true} variant="subtitle1" component="div" style={{ backgroundColor: '#ffcac2', height: '15vh',fontStyle: "italic", textAlign:"left"
              }} >
                “Music is the art which is most nigh to tears and memory.”
– Oscar Wilde
             </Typography>
             <Typography gutterBottom={true} variant="subtitle1" component="div" style={{ backgroundColor: '#d1cebd', height: '15vh',fontStyle: "italic", textAlign:"right"
              }} >
                “Love is friendship set to music.”
– Jackson Pollock
             </Typography>
             <br/>
             <img src="https://www.keepinspiring.me/wp-content/uploads/2020/08/music-can-change-the-world-because-it-can-change-people-bono-quote-1024x1024.jpg" alt="Logo" height="550px" />
             <br/>
             <br/>
             <Typography gutterBottom={true} variant="subtitle1" component="div" style={{ backgroundColor: '#ffcac2', height: '15vh',fontStyle: "italic", textAlign:"left"
              }} >
                “Music is the universal language of mankind.”
– Henry Wadsworth
             </Typography>
            
             <Typography gutterBottom={true} variant="subtitle1" component="div" style={{ backgroundColor: '#d1cebd', height: '15vh',fontStyle: "italic", textAlign:"right"
              }} >
                “Music is the literature of the heart; it commences where speech ends.”
– Alphonse de Lamartine
             </Typography>
             <br/>
             <img src="https://www.keepinspiring.me/wp-content/uploads/2020/08/music-in-the-soul-can-be-heard-by-the-universe-lao-tzu-quote-1024x1024.jpg" alt="Logo" height="550px" />
             
             </section>
         </Container>
     )
 }
 export default QuotesPage;
import React from "react";
import Google from "./Google";
import Calendar from "./Calendar";
import News from "./News";
import WoD from "./WoD";
import Yelp from "./Yelp";
import Thesaurus from "./Thesaurus";
import Dictionary from "./Dictionary";
import Weather from "./Weather";



const App = () =>
<div className='container'>
<div className='row'>
<div id ='calendar' className='square'>
<Calendar/>
</div>
<div id='newsbox' className='square'>
<News/>
</div>
<div className='square' id='newsbox'>
    <WoD/>
    </div>
</div>
<div className='row'>
<div id="dictionarybox" className='square'>
<Dictionary/>
</div>
<div className='square'>
<Google />
</div>
   <div className='square' id='newsbox'>
    <Yelp />
    </div>
</div>
<div className='row'>
<div id="weatherbox" className='square'>
<Weather/>
</div>
<div className='square'>
</div>
<div id ="thesaurusbox" className='square'>
<Thesaurus/>
</div>
</div>
</div>

export default App;

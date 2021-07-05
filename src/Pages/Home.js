import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HexagonGraph from '../components/HexagonGraph';
// For more information, read
// https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow


const Home = () => {
  return (
    <BrowserRouter>
      <h1>home Pages</h1>
      <Link to='/privacy-policy'>view</Link>
      <Switch>
        <Route path='/privacy-policy' component={() => {
          window.location.href = 'http://localhost:4000/login';
          return null;
        }} />
      </Switch>
      <HexagonGraph data={data}></HexagonGraph>
    </BrowserRouter>
  );
};
export default Home;
var data = [
  { title: "Reingold–Tilford Tree (Radial)", url: "http://bl.ocks.org/mbostock/4063550" },
  { title: "Factorisation Diagrams", url: "http://www.jasondavies.com/factorisation-diagrams/" },
  { title: "Phylogenetic Tree of Life", url: "http://www.jasondavies.com/tree-of-life/" },
  { title: "Geographic Clipping", url: "http://www.jasondavies.com/maps/clip/" },
  { title: "Les Misérables Co-occurrence Matrix", url: "http://bost.ocks.org/mike/miserables/" },
  { title: "L*a*b* and HCL color spaces", url: "http://bl.ocks.org/mbostock/3014589" },
  { title: "Treemap", url: "http://bl.ocks.org/mbostock/4063582" },
  { title: "Map Projection Transitions", url: "http://www.jasondavies.com/maps/transition/" },
  { title: "Across U.S. Companies, Tax Rates Vary Greatly", url: "http://www.nytimes.com/interactive/2013/05/25/sunday-review/corporate-taxes.html" },
  { title: "Rotating Voronoi", url: "http://bl.ocks.org/mbostock/4636377" },
  { title: "Zoomable Geography", url: "http://bl.ocks.org/mbostock/2374239" },
  { title: "Fisheye Distortion", url: "http://bost.ocks.org/mike/fisheye/" },
  { title: "Geodesic Rainbow", url: "http://bl.ocks.org/mbostock/3057239" },
  { title: "Hierarchical Bar Chart", url: "http://bl.ocks.org/mbostock/1283663" },
  { title: "Exoplanets", url: "http://bl.ocks.org/mbostock/3007180" },
  { title: "Crossfilter", url: "http://square.github.io/crossfilter/" },
  { title: "Alaska’s villages on the frontline of climate change", url: "http://www.guardian.co.uk/environment/interactive/2013/may/14/alaska-villages-frontline-global-warming" },
  { title: "The federal health-care exchange’s abysmal success rate", url: "http://www.washingtonpost.com/wp-srv/special/politics/state-vs-federal-exchanges/" },
  { title: "Counties Blue and Red, Moving Right and Left", url: "http://www.nytimes.com/interactive/2012/11/11/sunday-review/counties-moving.html" },
  { title: "At the National Conventions, the Words They Used", url: "http://www.nytimes.com/interactive/2012/09/06/us/politics/convention-word-counts.html" },
  { title: "Reprojected Raster Tiles", url: "http://www.jasondavies.com/maps/raster/" },
  { title: "Hive Plots", url: "http://bost.ocks.org/mike/hive/" },
  { title: "Donut Transitions", url: "http://bl.ocks.org/mbostock/4341417" },
  { title: "Non-Contiguous Cartogram", url: "http://bl.ocks.org/mbostock/4055908" },
  { title: "Spermatozoa", url: "http://bl.ocks.org/mbostock/1136236" },
  { title: "Zoomable Circle Packing", url: "http://bl.ocks.org/mbostock/7607535" },
  { title: "Transform Transitions", url: "http://bl.ocks.org/mbostock/1345853" },
  { title: "Scatterplot Matrix", url: "http://bl.ocks.org/mbostock/3213173" },
  { title: "Janet L. Yellen, on the Economy’s Twists and Turns", url: "http://www.nytimes.com/interactive/2013/10/09/us/yellen-fed-chart.html" },
  { title: "Front Row to Fashion Week", url: "http://www.nytimes.com/newsgraphics/2013/09/13/fashion-week-editors-picks/" },
  { title: "Interrupted Sinu-Mollweide", url: "http://bl.ocks.org/mbostock/4481520" },
  { title: "Streamgraph", url: "http://bl.ocks.org/mbostock/4060954" },
  { title: "Force-Directed Graph", url: "http://bl.ocks.org/mbostock/4062045" },
  { title: "Zoomable Icicle", url: "http://bl.ocks.org/mbostock/1005873" },
  { title: "Collision Detection", url: "http://bl.ocks.org/mbostock/3231298" },
  { title: "Waterman Butterfly", url: "http://bl.ocks.org/mbostock/4458497" },
  { title: "Airocean World", url: "http://www.jasondavies.com/maps/airocean/" },
  { title: "Countries by Area", url: "http://www.jasondavies.com/maps/countries-by-area/" },
  { title: "Bilevel Partition", url: "http://bl.ocks.org/mbostock/5944371" },
  { title: "Map Zooming", url: "http://bl.ocks.org/mbostock/6242308" },
  { title: "Fisher–Yates Shuffle", url: "http://bost.ocks.org/mike/shuffle/" },
  { title: "Sphere Spirals", url: "http://www.jasondavies.com/maps/sphere-spirals/" },
  { title: "World Tour", url: "http://bl.ocks.org/mbostock/4183330" },
  { title: "Zoomable Treemaps", url: "http://bost.ocks.org/mike/treemap/" },
  { title: "Clipped Map Tiles", url: "http://bl.ocks.org/mbostock/4150951" },
  { title: "Cubism.js", url: "http://square.github.io/cubism/" },
  { title: "Voronoi Labels", url: "http://bl.ocks.org/mbostock/6909318" },
  { title: "Bivariate Hexbin Map", url: "http://bl.ocks.org/mbostock/4330486" },
  { title: "OMG Particles!", url: "http://bl.ocks.org/mbostock/1062544" },
  { title: "Calendar View", url: "http://bl.ocks.org/mbostock/4063318" },
  { title: "The Wealth & Health of Nations", url: "http://bost.ocks.org/mike/nations/" },
  { title: "Collapsible Tree", url: "http://bl.ocks.org/mbostock/4339083" },
  { title: "Hexagonal Binning", url: "http://bl.ocks.org/mbostock/4248145" },
  { title: "Over the Decades, How States Have Shifted", url: "http://www.nytimes.com/interactive/2012/10/15/us/politics/swing-history.html" },
  { title: "China Still Dominates, but Some Manufacturers Look Elsewhere", url: "http://www.nytimes.com/interactive/2013/04/08/business/global/asia-map.html" },
  { title: "Strikeouts on the Rise", url: "http://www.nytimes.com/interactive/2013/03/29/sports/baseball/Strikeouts-Are-Still-Soaring.html?ref=baseball" },
  { title: "Epicyclic Gearing", url: "http://bl.ocks.org/mbostock/1353700" },
  { title: "Voronoi Tessellation", url: "http://bl.ocks.org/mbostock/4060366" },
  { title: "The state of our union is … dumber", url: "http://www.guardian.co.uk/world/interactive/2013/feb/12/state-of-the-union-reading-level" },
  { title: "Chord Diagram", url: "http://bl.ocks.org/mbostock/1046712" },
  { title: "Floating Landmasses", url: "http://bl.ocks.org/mbostock/6738360" },
  { title: "How the Tax Burden Has Changed", url: "http://www.nytimes.com/interactive/2012/11/30/us/tax-burden.html" },
  { title: "Prime Number Patterns", url: "http://www.jasondavies.com/primos/" },
  { title: "Koalas to the Max", url: "http://www.koalastothemax.com/" },
  { title: "Constellations of Directors and Their Stars", url: "http://www.nytimes.com/newsgraphics/2013/09/07/director-star-chart/" },
  { title: "Drought and Deluge in the Lower 48", url: "http://www.nytimes.com/interactive/2012/08/11/sunday-review/drought-history.html" },
  { title: "Animated Bézier Curves", url: "http://www.jasondavies.com/animated-bezier/" },
  { title: "Histogram", url: "http://bl.ocks.org/mbostock/3048450" },
  { title: "Stacked-to-Grouped Bars", url: "http://bl.ocks.org/mbostock/3943967" },
  { title: "Force-Directed States of America", url: "http://bl.ocks.org/mbostock/1073373" },
  { title: "Faux-3D Arcs", url: "http://bl.ocks.org/dwtkns/4973620" },
  { title: "512 Paths to the White House", url: "http://www.nytimes.com/interactive/2012/11/02/us/politics/paths-to-the-white-house.html" },
  { title: "Polar Clock", url: "http://bl.ocks.org/mbostock/1096355" },
  { title: "Population Pyramid", url: "http://bl.ocks.org/mbostock/4062085" },
  { title: "The America’s Cup Finale: Oracle’s Path to Victory", url: "http://www.nytimes.com/interactive/2013/09/25/sports/americas-cup-course.html" },
  { title: "Rainbow Worm", url: "http://bl.ocks.org/mbostock/4165404" },
  { title: "Four Ways to Slice Obama’s 2013 Budget Proposal", url: "http://www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html" },
  { title: "Quadtree", url: "http://bl.ocks.org/mbostock/4343214" },
  { title: "Bubble Chart", url: "http://bl.ocks.org/mbostock/4063269" },
  { title: "Women as Academic Authors, 1665-2010", url: "http://chronicle.com/article/Woman-as-Academic-Authors/135192/" },
  { title: "Choropleth", url: "http://bl.ocks.org/mbostock/4060606" },
  { title: "Gilbert’s Two-World Perspective", url: "http://www.jasondavies.com/maps/gilbert/" },
  { title: "For Eli Manning, 150 Games and Counting", url: "http://www.nytimes.com/newsgraphics/2013/09/28/eli-manning-milestone/" },
  { title: "Word Tree", url: "http://www.jasondavies.com/wordtree/" },
  { title: "Mobile Patent Suits", url: "http://bl.ocks.org/mbostock/1153292" },
  { title: "Mitchell’s Best-Candidate", url: "http://bl.ocks.org/mbostock/1893974" },
  { title: "Sankey Diagrams", url: "http://bost.ocks.org/mike/sankey/" },
  { title: "van Wijk Smooth Zooming", url: "http://bl.ocks.org/mbostock/3828981" },
  { title: "Bryce Harper: A swing of beauty", url: "http://www.washingtonpost.com/wp-srv/special/sports/bryce-harper-swing-of-beauty/" },
  { title: "Dissecting a Trailer: The Parts of the Film That Make the Cut", url: "http://www.nytimes.com/interactive/2013/02/19/movies/awardsseason/oscar-trailers.html" },
  { title: "Violence and guns in best-selling video games", url: "http://www.guardian.co.uk/world/interactive/2013/apr/30/violence-guns-best-selling-video-games" },
  { title: "Hierarchical Edge Bundling", url: "http://bl.ocks.org/mbostock/1044242" },
  { title: "Geographic Bounding Boxes", url: "http://www.jasondavies.com/maps/bounds/" },
  { title: "Live Results: Massachusetts Senate Special Election", url: "http://elections.huffingtonpost.com/2013/massachusetts-senate-results" },
  { title: "Zoomable Map Tiles", url: "http://bl.ocks.org/mbostock/4132797" },
  { title: "D3 Show Reel", url: "http://bl.ocks.org/mbostock/1256572" },
  { title: "Building Hamiltonian Graphs from LCF Notation", url: "http://christophermanning.org/projects/building-cubic-hamiltonian-graphs-from-lcf-notation" },
  { title: "Sequences sunburst", url: "http://bl.ocks.org/kerryrodden/7090426" },
  { title: "Azimuth and Distance from London", url: "http://www.jasondavies.com/maps/azimuth-distance/" },
  { title: "Parallel Sets", url: "http://www.jasondavies.com/parallel-sets/" }
];

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
        <HexagonGraph graphData={data}></HexagonGraph>
    </BrowserRouter>
  );
};
export default Home;

const data = {
  "topArtists": [
    {
      "id": "0oSGxfWSnnOXhD2fKuz2Gy",
      "name": "David Bowie",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb0db3b11972a84207f256769b",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051740db3b11972a84207f256769b",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1780db3b11972a84207f256769b",
          "width": 160
        }
      ]
    },
    {
      "id": "2GetD8JH1hPJVDBjr1HiuP",
      "name": "Chill Jazz-Lounge",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb99e3b84db2e43839f2fe78b8",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab6761610000517499e3b84db2e43839f2fe78b8",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f17899e3b84db2e43839f2fe78b8",
          "width": 160
        }
      ]
    },
    {
      "id": "47mIJdHORyRerp4os813jD",
      "name": "League of Legends",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb01d9f68fbc43d5243dc2c0fe",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab6761610000517401d9f68fbc43d5243dc2c0fe",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f17801d9f68fbc43d5243dc2c0fe",
          "width": 160
        }
      ]
    },
    {
      "id": "3XHO7cRUPCLOr6jwp8vsx5",
      "name": "alt-J",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb6587f1b18c9fab29d5164324",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051746587f1b18c9fab29d5164324",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1786587f1b18c9fab29d5164324",
          "width": 160
        }
      ]
    },
    {
      "id": "7daSp9zXk1dmqNxwKFkL35",
      "name": "Kupla",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebbc2dba4435c794121d40fd23",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174bc2dba4435c794121d40fd23",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178bc2dba4435c794121d40fd23",
          "width": 160
        }
      ]
    },
    {
      "id": "78xUyw6FkVZrRAtziFdtdu",
      "name": "The Roots",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb7e92a85b9e31236380cd38f2",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051747e92a85b9e31236380cd38f2",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1787e92a85b9e31236380cd38f2",
          "width": 160
        }
      ]
    },
    {
      "id": "4LLpKhyESsyAXpc4laK94U",
      "name": "Mac Miller",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebed3b89aa602145fde71a163a",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174ed3b89aa602145fde71a163a",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178ed3b89aa602145fde71a163a",
          "width": 160
        }
      ]
    },
    {
      "id": "5KJjxTI0Nut0kY5xrqNzdd",
      "name": "The Jazz Masters",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b2730c5070a0d07108a678b5b81d",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e020c5070a0d07108a678b5b81d",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d000048510c5070a0d07108a678b5b81d",
          "width": 64
        }
      ]
    },
    {
      "id": "3koiLjNrgRTNbOwViDipeA",
      "name": "Marvin Gaye",
      "images": [
        {
          "height": 1232,
          "url": "https://i.scdn.co/image/cf79bd3e5c787e2ec152eeb1ea5538b0d4cf1434",
          "width": 1000
        },
        {
          "height": 788,
          "url": "https://i.scdn.co/image/f69e669cd95c6008c6220fd060982ff9516ed636",
          "width": 640
        },
        {
          "height": 246,
          "url": "https://i.scdn.co/image/c2c1b3612f38b206411173c168b912d306b5c196",
          "width": 200
        },
        {
          "height": 79,
          "url": "https://i.scdn.co/image/aa28a931be2da1c33411b0d6c106bcf6e3d17de7",
          "width": 64
        }
      ]
    },
    {
      "id": "4ytkhMSAnrDP8XzRNlw9FS",
      "name": "Vince Guaraldi Trio",
      "images": [
        {
          "height": 1000,
          "url": "https://i.scdn.co/image/822d7cac5aa9649b2c8a0be5da89567f8b80ca56",
          "width": 1000
        },
        {
          "height": 640,
          "url": "https://i.scdn.co/image/0c2ca300db3332bf24ae50cce9dbb1e5d3789ea6",
          "width": 640
        },
        {
          "height": 200,
          "url": "https://i.scdn.co/image/2c2dbcbc0bce3aa7c0bca4f114ffec7a90688999",
          "width": 200
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/c649b5b0ef55206408245e435324ffc0dd376ae9",
          "width": 64
        }
      ]
    },
    {
      "id": "1nJvji2KIlWSseXRSlNYsC",
      "name": "The Velvet Underground",
      "images": [
        {
          "height": 1236,
          "url": "https://i.scdn.co/image/d69c2cf10323bf08443c7d122f3a1824a760ab57",
          "width": 1000
        },
        {
          "height": 791,
          "url": "https://i.scdn.co/image/24e7531935f88f55744cc8c9ed2528f466cba276",
          "width": 640
        },
        {
          "height": 247,
          "url": "https://i.scdn.co/image/fedcb6f64de6571e2c208a21fc16b9e05e38cf2f",
          "width": 200
        },
        {
          "height": 79,
          "url": "https://i.scdn.co/image/0fda1f46337398e35d5c7c672ddc77beb68a8f93",
          "width": 64
        }
      ]
    },
    {
      "id": "5MbNzCW3qokGyoo9giHA3V",
      "name": "EARTHGANG",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb7bd84652114eabfcb1d4514f",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051747bd84652114eabfcb1d4514f",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1787bd84652114eabfcb1d4514f",
          "width": 160
        }
      ]
    },
    {
      "id": "77aATgrzmuoRjmqxPcEIHU",
      "name": "brillion.",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eba722a44cb87d406929238297",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174a722a44cb87d406929238297",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178a722a44cb87d406929238297",
          "width": 160
        }
      ]
    },
    {
      "id": "1CYsQCypByMVgnv17qsSbQ",
      "name": "Crosby, Stills, Nash & Young",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb4e5018dad07ee004f171d7d3",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051744e5018dad07ee004f171d7d3",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1784e5018dad07ee004f171d7d3",
          "width": 160
        }
      ]
    },
    {
      "id": "3vzJueN7TkCtYpz1myVmDU",
      "name": "Dontcry",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebc09101c3206236acff7a29bc",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174c09101c3206236acff7a29bc",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178c09101c3206236acff7a29bc",
          "width": 160
        }
      ]
    },
    {
      "id": "22WZ7M8sxp5THdruNY3gXt",
      "name": "The Doors",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb440959e022afc20e819050bd",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174440959e022afc20e819050bd",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178440959e022afc20e819050bd",
          "width": 160
        }
      ]
    },
    {
      "id": "6bA2OonnJsG1tN9yClu2aC",
      "name": "mell-ø",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb022046cc52cc0b8ccae376b0",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174022046cc52cc0b8ccae376b0",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178022046cc52cc0b8ccae376b0",
          "width": 160
        }
      ]
    },
    {
      "id": "6TeBxtluBMQixZcKkJ3ZrB",
      "name": "HM Surf",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5ebc1105b865f1018cfc7df79d7",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174c1105b865f1018cfc7df79d7",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178c1105b865f1018cfc7df79d7",
          "width": 160
        }
      ]
    },
    {
      "id": "6vLlQYujOujIrm7zAKzEdG",
      "name": "Donovan",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb913703ba6b15fb3ba0547de4",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab67616100005174913703ba6b15fb3ba0547de4",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f178913703ba6b15fb3ba0547de4",
          "width": 160
        }
      ]
    },
    {
      "id": "50Ej4gF8iYESted3e4JZ4t",
      "name": "dryhope",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab6761610000e5eb8e218737ce396af50b55e505",
          "width": 640
        },
        {
          "height": 320,
          "url": "https://i.scdn.co/image/ab676161000051748e218737ce396af50b55e505",
          "width": 320
        },
        {
          "height": 160,
          "url": "https://i.scdn.co/image/ab6761610000f1788e218737ce396af50b55e505",
          "width": 160
        }
      ]
    }
  ]
}

// var data = [
//   { title: "Reingold–Tilford Tree (Radial)", url: "http://bl.ocks.org/mbostock/4063550" },
//   { title: "Factorisation Diagrams", url: "http://www.jasondavies.com/factorisation-diagrams/" },
//   { title: "Phylogenetic Tree of Life", url: "http://www.jasondavies.com/tree-of-life/" },
//   { title: "Geographic Clipping", url: "http://www.jasondavies.com/maps/clip/" },
//   { title: "Les Misérables Co-occurrence Matrix", url: "http://bost.ocks.org/mike/miserables/" },
//   { title: "L*a*b* and HCL color spaces", url: "http://bl.ocks.org/mbostock/3014589" },
//   { title: "Treemap", url: "http://bl.ocks.org/mbostock/4063582" },
//   { title: "Map Projection Transitions", url: "http://www.jasondavies.com/maps/transition/" },
//   { title: "Across U.S. Companies, Tax Rates Vary Greatly", url: "http://www.nytimes.com/interactive/2013/05/25/sunday-review/corporate-taxes.html" },
//   { title: "Rotating Voronoi", url: "http://bl.ocks.org/mbostock/4636377" },
//   { title: "Zoomable Geography", url: "http://bl.ocks.org/mbostock/2374239" },
//   { title: "Fisheye Distortion", url: "http://bost.ocks.org/mike/fisheye/" },
//   { title: "Geodesic Rainbow", url: "http://bl.ocks.org/mbostock/3057239" },
//   { title: "Hierarchical Bar Chart", url: "http://bl.ocks.org/mbostock/1283663" },
//   { title: "Exoplanets", url: "http://bl.ocks.org/mbostock/3007180" },
//   { title: "Crossfilter", url: "http://square.github.io/crossfilter/" },
//   { title: "Alaska’s villages on the frontline of climate change", url: "http://www.guardian.co.uk/environment/interactive/2013/may/14/alaska-villages-frontline-global-warming" },
//   { title: "The federal health-care exchange’s abysmal success rate", url: "http://www.washingtonpost.com/wp-srv/special/politics/state-vs-federal-exchanges/" },
//   { title: "Counties Blue and Red, Moving Right and Left", url: "http://www.nytimes.com/interactive/2012/11/11/sunday-review/counties-moving.html" },
//   { title: "At the National Conventions, the Words They Used", url: "http://www.nytimes.com/interactive/2012/09/06/us/politics/convention-word-counts.html" },
//   { title: "Reprojected Raster Tiles", url: "http://www.jasondavies.com/maps/raster/" },
//   { title: "Hive Plots", url: "http://bost.ocks.org/mike/hive/" },
//   { title: "Donut Transitions", url: "http://bl.ocks.org/mbostock/4341417" },
//   { title: "Non-Contiguous Cartogram", url: "http://bl.ocks.org/mbostock/4055908" },
//   { title: "Spermatozoa", url: "http://bl.ocks.org/mbostock/1136236" },
//   { title: "Zoomable Circle Packing", url: "http://bl.ocks.org/mbostock/7607535" },
//   { title: "Transform Transitions", url: "http://bl.ocks.org/mbostock/1345853" },
//   { title: "Scatterplot Matrix", url: "http://bl.ocks.org/mbostock/3213173" },
//   { title: "Janet L. Yellen, on the Economy’s Twists and Turns", url: "http://www.nytimes.com/interactive/2013/10/09/us/yellen-fed-chart.html" },
//   { title: "Front Row to Fashion Week", url: "http://www.nytimes.com/newsgraphics/2013/09/13/fashion-week-editors-picks/" },
//   { title: "Interrupted Sinu-Mollweide", url: "http://bl.ocks.org/mbostock/4481520" },
//   { title: "Streamgraph", url: "http://bl.ocks.org/mbostock/4060954" },
//   { title: "Force-Directed Graph", url: "http://bl.ocks.org/mbostock/4062045" },
//   { title: "Zoomable Icicle", url: "http://bl.ocks.org/mbostock/1005873" },
//   { title: "Collision Detection", url: "http://bl.ocks.org/mbostock/3231298" },
//   { title: "Waterman Butterfly", url: "http://bl.ocks.org/mbostock/4458497" },
//   { title: "Airocean World", url: "http://www.jasondavies.com/maps/airocean/" },
//   { title: "Countries by Area", url: "http://www.jasondavies.com/maps/countries-by-area/" },
//   { title: "Bilevel Partition", url: "http://bl.ocks.org/mbostock/5944371" },
//   { title: "Map Zooming", url: "http://bl.ocks.org/mbostock/6242308" },
//   { title: "Fisher–Yates Shuffle", url: "http://bost.ocks.org/mike/shuffle/" },
//   { title: "Sphere Spirals", url: "http://www.jasondavies.com/maps/sphere-spirals/" },
//   { title: "World Tour", url: "http://bl.ocks.org/mbostock/4183330" },
//   { title: "Zoomable Treemaps", url: "http://bost.ocks.org/mike/treemap/" },
//   { title: "Clipped Map Tiles", url: "http://bl.ocks.org/mbostock/4150951" },
//   { title: "Cubism.js", url: "http://square.github.io/cubism/" },
//   { title: "Voronoi Labels", url: "http://bl.ocks.org/mbostock/6909318" },
//   { title: "Bivariate Hexbin Map", url: "http://bl.ocks.org/mbostock/4330486" },
//   { title: "OMG Particles!", url: "http://bl.ocks.org/mbostock/1062544" },
//   { title: "Calendar View", url: "http://bl.ocks.org/mbostock/4063318" },
//   { title: "The Wealth & Health of Nations", url: "http://bost.ocks.org/mike/nations/" },
//   { title: "Collapsible Tree", url: "http://bl.ocks.org/mbostock/4339083" },
//   { title: "Hexagonal Binning", url: "http://bl.ocks.org/mbostock/4248145" },
//   { title: "Over the Decades, How States Have Shifted", url: "http://www.nytimes.com/interactive/2012/10/15/us/politics/swing-history.html" },
//   { title: "China Still Dominates, but Some Manufacturers Look Elsewhere", url: "http://www.nytimes.com/interactive/2013/04/08/business/global/asia-map.html" },
//   { title: "Strikeouts on the Rise", url: "http://www.nytimes.com/interactive/2013/03/29/sports/baseball/Strikeouts-Are-Still-Soaring.html?ref=baseball" },
//   { title: "Epicyclic Gearing", url: "http://bl.ocks.org/mbostock/1353700" },
//   { title: "Voronoi Tessellation", url: "http://bl.ocks.org/mbostock/4060366" },
//   { title: "The state of our union is … dumber", url: "http://www.guardian.co.uk/world/interactive/2013/feb/12/state-of-the-union-reading-level" },
//   { title: "Chord Diagram", url: "http://bl.ocks.org/mbostock/1046712" },
//   { title: "Floating Landmasses", url: "http://bl.ocks.org/mbostock/6738360" },
//   { title: "How the Tax Burden Has Changed", url: "http://www.nytimes.com/interactive/2012/11/30/us/tax-burden.html" },
//   { title: "Prime Number Patterns", url: "http://www.jasondavies.com/primos/" },
//   { title: "Koalas to the Max", url: "http://www.koalastothemax.com/" },
//   { title: "Constellations of Directors and Their Stars", url: "http://www.nytimes.com/newsgraphics/2013/09/07/director-star-chart/" },
//   { title: "Drought and Deluge in the Lower 48", url: "http://www.nytimes.com/interactive/2012/08/11/sunday-review/drought-history.html" },
//   { title: "Animated Bézier Curves", url: "http://www.jasondavies.com/animated-bezier/" },
//   { title: "Histogram", url: "http://bl.ocks.org/mbostock/3048450" },
//   { title: "Stacked-to-Grouped Bars", url: "http://bl.ocks.org/mbostock/3943967" },
//   { title: "Force-Directed States of America", url: "http://bl.ocks.org/mbostock/1073373" },
//   { title: "Faux-3D Arcs", url: "http://bl.ocks.org/dwtkns/4973620" },
//   { title: "512 Paths to the White House", url: "http://www.nytimes.com/interactive/2012/11/02/us/politics/paths-to-the-white-house.html" },
//   { title: "Polar Clock", url: "http://bl.ocks.org/mbostock/1096355" },
//   { title: "Population Pyramid", url: "http://bl.ocks.org/mbostock/4062085" },
//   { title: "The America’s Cup Finale: Oracle’s Path to Victory", url: "http://www.nytimes.com/interactive/2013/09/25/sports/americas-cup-course.html" },
//   { title: "Rainbow Worm", url: "http://bl.ocks.org/mbostock/4165404" },
//   { title: "Four Ways to Slice Obama’s 2013 Budget Proposal", url: "http://www.nytimes.com/interactive/2012/02/13/us/politics/2013-budget-proposal-graphic.html" },
//   { title: "Quadtree", url: "http://bl.ocks.org/mbostock/4343214" },
//   { title: "Bubble Chart", url: "http://bl.ocks.org/mbostock/4063269" },
//   { title: "Women as Academic Authors, 1665-2010", url: "http://chronicle.com/article/Woman-as-Academic-Authors/135192/" },
//   { title: "Choropleth", url: "http://bl.ocks.org/mbostock/4060606" },
//   { title: "Gilbert’s Two-World Perspective", url: "http://www.jasondavies.com/maps/gilbert/" },
//   { title: "For Eli Manning, 150 Games and Counting", url: "http://www.nytimes.com/newsgraphics/2013/09/28/eli-manning-milestone/" },
//   { title: "Word Tree", url: "http://www.jasondavies.com/wordtree/" },
//   { title: "Mobile Patent Suits", url: "http://bl.ocks.org/mbostock/1153292" },
//   { title: "Mitchell’s Best-Candidate", url: "http://bl.ocks.org/mbostock/1893974" },
//   { title: "Sankey Diagrams", url: "http://bost.ocks.org/mike/sankey/" },
//   { title: "van Wijk Smooth Zooming", url: "http://bl.ocks.org/mbostock/3828981" },
//   { title: "Bryce Harper: A swing of beauty", url: "http://www.washingtonpost.com/wp-srv/special/sports/bryce-harper-swing-of-beauty/" },
//   { title: "Dissecting a Trailer: The Parts of the Film That Make the Cut", url: "http://www.nytimes.com/interactive/2013/02/19/movies/awardsseason/oscar-trailers.html" },
//   { title: "Violence and guns in best-selling video games", url: "http://www.guardian.co.uk/world/interactive/2013/apr/30/violence-guns-best-selling-video-games" },
//   { title: "Hierarchical Edge Bundling", url: "http://bl.ocks.org/mbostock/1044242" },
//   { title: "Geographic Bounding Boxes", url: "http://www.jasondavies.com/maps/bounds/" },
//   { title: "Live Results: Massachusetts Senate Special Election", url: "http://elections.huffingtonpost.com/2013/massachusetts-senate-results" },
//   { title: "Zoomable Map Tiles", url: "http://bl.ocks.org/mbostock/4132797" },
//   { title: "D3 Show Reel", url: "http://bl.ocks.org/mbostock/1256572" },
//   { title: "Building Hamiltonian Graphs from LCF Notation", url: "http://christophermanning.org/projects/building-cubic-hamiltonian-graphs-from-lcf-notation" },
//   { title: "Sequences sunburst", url: "http://bl.ocks.org/kerryrodden/7090426" },
//   { title: "Azimuth and Distance from London", url: "http://www.jasondavies.com/maps/azimuth-distance/" },
//   { title: "Parallel Sets", url: "http://www.jasondavies.com/parallel-sets/" }
// ];

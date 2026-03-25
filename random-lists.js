let operandElementClass = "number-item"; // handle to html image element
let secondOperandElementClass = "glyph-properties-1"; // handle to html number element
let thirdOperandElementClass = "glyph-properties-2"; // handle to html name element
let fourthOperandElementClass = "glyph-properties-3"; // handle to html description element
let fifthOperandElementClass = "glyph-properties-4"; // handle to html associations element
let sixthOperandElementClass = "glyph-collection" // handle to html collection element
let itemsList = document.getElementsByClassName(operandElementClass);
let propertiesListNumber = document.getElementsByClassName(secondOperandElementClass);
let propertiesListName = document.getElementsByClassName(thirdOperandElementClass);
let propertiesListDescription = document.getElementsByClassName(fourthOperandElementClass);
let propertiesListAssociations = document.getElementsByClassName(fifthOperandElementClass);
let propertyGlyphCollection = document.getElementsByClassName(sixthOperandElementClass);
let spriteList = [];
let dataIndex = [];
let dataList= [
    [1," That Which Knows"," An Eye"," Understanding, Perception, Insight"],
    [2," That Which Acts"," A Hand"," Craft, Activity, Making, Doing"],
    [3," That Which Is"," A House"," Location, Structure, Existence, Atmosphere"],
    [4," That Which Moves"," A Wheel"," Going, Leaving, Arriving, Dynamic"],
    [5," State of Matter"," A Stick Figure Person"," Health, Illness, Body, Incarnation, Physical"],
    [6," State of Feeling"," A Heart Sign"," Emotional, Aversion, Preferences, Attraction"],
    [7," State of Mind"," A Synapse Sign"," Mental, Mindset, Belief, Thoughts, Process"],
    [8," State of Self"," A Yin-Yang"," Spiritual, Totality, Wholeness, Integrations"],
    [9," Continuous Aspects"," A Circle"," Uninterrupted, Analog, Spectrum"],
    [10," Discrete Aspects"," A Zero and a One"," All or Nothing, Quantized, Digital"],
    [11," The Unknowns"," A Question Mark"," Uncertainty, Variable, Inquiry"],
    [12," Negations"," An Exclamation Point"," 'Not' Operator, False, Simulacrum, Disputed"],
    [13," Concurrences"," An Ampersand"," 'And' Operator, Both, Co-Occurring, Including"],
    [14," Dysjunctions"," The Word 'Or'"," 'Or' Operator, alternatives, Choices"],
    [15," Implications"," An Arrow"," 'If/Then' Operator, Implications, Conditional"],
    [16," Entanglements"," A Double Arrow"," 'If and Only If' Operator, Interdependence, Necessity"],
    [17," The Kilogram"," A Standard Mass (as for Scales)"," Physics, Material, Natural Forces, Tangible"],
    [18," Atomic Legos"," A Benzene Ring"," Chemistry, Atomic, Molecular, Electric"],
    [19," We the Living"," A Leaf"," Biology, Living, Organic, Organism, Metabolism"],
    [20," The Blue Marble"," A Water Molecule"," Ecology, Biome, Ecosystem, Biosphere, Environment"],
    [21," It Takes All Kinds"," A Venn Diagram"," Set Theory, Groups, Definitions, Inclusions, Exclusions, Unions, Intersections"],
    [22," Chances and Cohorts"," A Dice"," Probability, Statistics, Chance, Odds, Randomness, Patterns, Distributions"],
    [23," Divergences"," A Butterfly"," Chaos Theory, Nonlinear, Complex, Recursive, Turbulent"],
    [24," Cycles and Flows"," Two Circled Arrows"," Emergent Systems, Systems Theory, Feedback Flows, Interacting, Superorganisms"],
    [25," Expressions"," A Music Note"," Creativity, Synthesis, Invention, Imagination"],
    [26," The Transceivers"," A Mortarboard Graduation Hat"," Education, Learning, Knowledge, Teaching, Experiences"],
    [27," City, Tribe, and Family"," A Spiral"," Social Interaction, Balance, Fairness, Justice, Society, Community"],
    [28," Utility Vs. Valuation"," A Dollar Sign"," Value, Worth, Usefulness, Exchange, Economy"],
    [29," The Horde Within"," A Cartoon Thought Bubble"," Psychology, Thought, Cognition, The Mind, Motivation, Personality"],
    [30," Star Alignments"," A Four-Leaf Clover"," Luck, Fate, Karma, Coincidence, Synchronicity"],
    [31," Extra Energies"," A Pentagram"," Magic, Intention, Ethereal, Extraordinary, Supernatural"],
    [32," Across the Mirror"," A Jester's or Joker's Hat"," Trickster, Paradox, Surprise, Clarity, Truth, Humor"],
    [33," Active Stillness"," A 3/4 Circle Arrow Around a Plus Sign"," Here, Now, Silence, Mindful, Harmony, Patience, Contemplation, Consideration"],
    [34," Focal Points"," 3 Inward Pointing Angles Around a Small Circle"," Concentration, Massed, Clustering, Uniform, Alignment"],
    [35," Scatterings"," 3 Arrows Pointing Outward from a Common Center"," Spread, Diverse, Varied, Distraction, Dispersion, Diffuse, Diluted"],
    [36," Ordering the House"," Empty Parentheses"," Sequential, Arrange, Composite, Assembly, Order"],
    [37," The Spark"," An Asterisk"," Desire, Life, Will, Beginnings, Autonomous"],
    [38," Nondualism"," A Small Circle on a Sine Wave"," Wavicle, Mass, Energy, Objects, Space, Fields, Poimts"],
    [39," Tick-Tock"," An Analog Clock Face"," Time, Waiting, Span, Speed, Patience, Duration"],
    [40," Releasing"," A Cartoon Skull"," Endings, Fear Loss, Conclusion, Completion"," "],
    [41," Boundless Ocean"," 3 Paralell Wavy Lines"," Unconscious, Deep Self, Causality, Role, Persona"],
    [42," A Very Small Boat"," A Cartoon Boat"," Conscious Mind, Belief, Awareness, Thought, Purpose"],
    [43," Your Agent"," The Pronoun 'I'"," Identity, Identical, Outward Self, Self Knowledge"],
    [44," The Deception"," An Equilateral Triangle"," Essence, Ideal, Perfection, Fallacy, Lies"],
    [45," High Energy Particle"," A Lower Case Letter 'g'"," Symbol, Glyph, Alphabet, Unit, Sign"],
    [46," The Utterance"," A Jagged Line in Between Square Brackets"," Language, Communication, Words, Speech, Transmission"],
    [47," Simple Machinery"," A Drawing Compass"," Tool, Craft, Purpose, Technology, Measuring, Technique"],
    [48," 3 Cases of Spaces"," Two Concentric Circles with Three Lines Radiating from a Common Center Point"," Coordinate Space, Map, Graph, Grid, Record, Plan"]
];

function pseudoShuffle(min, maxPlus1) { return Math.floor(Math.random() * (maxPlus1 - min)) + min };
function insertSprite(xIndex, yIndex) { return `${-( (xIndex-1) * 155 )}px ${-( (yIndex-1) * 155 )}px` };

document.getElementById('drawGlyphsTrigger').addEventListener('click', function (e) {
    for (let i=0; i < itemsList.length; i++) {
        spriteList[i] = [pseudoShuffle(1,9),pseudoShuffle(1,7)];
        itemsList[i].style.backgroundPosition = insertSprite( spriteList[i][0], spriteList[i][1] );
    }
    for (let i=0; i < spriteList.length; i++) {
        dataIndex[i] = spriteList[i][0] + ((spriteList[i][1] - 1) * 8) - 1;
    }
    for (let i=0; i < dataIndex.length; i++) {
        propertiesListNumber[i].innerHTML = dataList[dataIndex[i]][0];
        propertiesListName[i].innerHTML = dataList[dataIndex[i]][1];
        propertiesListDescription[i].innerHTML = dataList[dataIndex[i]][2];
        propertiesListAssociations[i].innerHTML = dataList[dataIndex[i]][3];
        switch (true) {
            case (dataList[dataIndex[i]][0] < 9):
                propertyGlyphCollection[i].innerHTML = "Animalia /<br> Selfhood<br> Collection";
                break;
            case (dataList[dataIndex[i]][0] < 17):
                propertyGlyphCollection[i].innerHTML = "Logic /<br> Operative<br> Collection";
                break;
            case (dataList[dataIndex[i]][0] < 25):
                propertyGlyphCollection[i].innerHTML = "Sciences /<br> Systematic<br> Collection";
                break;
            case (dataList[dataIndex[i]][0] < 33):
                propertyGlyphCollection[i].innerHTML = "Humanism /<br> Archetypes<br> Collection";
                break;
            case (dataList[dataIndex[i]][0] < 41):
                propertyGlyphCollection[i].innerHTML = "Forces of Nature /<br> Existential Signposts<br> Collection";
                break;
            case (dataList[dataIndex[i]][0] < 49):
                propertyGlyphCollection[i].innerHTML = "Cognition /<br> Communicative<br> Collection";
                break;
            default:
                console.log("something is wrong line 101");
        }
    }
});
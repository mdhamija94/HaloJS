/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dictionary.js":
/*!***************************!*\
  !*** ./src/dictionary.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Dictionary {\n  constructor() { \n    this.words = [\n      'sir', 'finishing', 'this', 'fight', 'adjust', 'answer', 'action', 'apology', \n      'arise', 'asylum', 'agent', 'ash', 'anger', 'attic', 'amuse', 'auction', \n      'acquit', 'apple', 'admit', 'advance', 'athlete', 'anxiety', 'age', 'analyst', \n      'allow', 'agenda', 'adviser', 'aspect', 'appear', 'assault', 'absorb', 'aunt', \n      'average', 'accent', 'adopt', 'alive', 'ankle', 'area', 'agree', 'applied', \n      'abbey', 'ally', 'avenue', 'alarm', 'bee', 'belly', 'bridge', 'beg', 'burst', \n      'bus', 'bathtub', 'blonde', 'blind', 'bother', 'bold', 'baby', 'bench', 'bloody', \n      'blue', 'bare', 'brother', 'border', 'bride', 'biscuit', 'bean', 'benefit', \n      'brain', 'basic', 'bulb', 'bullet', 'bite', 'bend', 'bed', 'behead', 'boy', \n      'bland', 'basis', 'breeze', 'brink', 'burn', 'bedroom', 'bake', 'bring', 'code', \n      'cash', 'convert', 'cater', 'column', 'cabin', 'call', 'creep', 'corn', 'card', \n      'curve', 'chip', 'cousin', 'cope', 'crystal', 'crash', 'clean', 'creed', \n      'class', 'chord', 'core', 'contact', 'craft', 'courage', 'change', 'convict', \n      'cotton', 'chest', 'cast', 'camera', 'care', 'court', 'current', 'camp', \n      'cabinet', 'crack', 'charge', 'city', 'cream', 'compose', 'drop', 'deliver', \n      'dribble', 'distant', 'decide', 'dose', 'discuss', 'defend', 'disclose', 'dairy', \n      'dilemma', 'debate', 'delete', 'deficit', 'dozen', 'deadly', 'deer', 'dish', \n      'dare', 'doctor', 'deposit', 'detail', 'dressing', 'double', 'displace', \n      'delivery', 'dollar', 'dorm', 'depart', 'differ', 'disgrace', 'dentist', \n      'drift', 'diet', 'dialogue', 'document', 'distort', 'dedicate', 'director', \n      'deep', 'emotion', 'edge', 'evening', 'extort', 'exchange', 'ear', 'equal', \n      'expect', 'equinox', 'exact', 'efflux', 'econobox', 'entry', 'extract', \n      'effort', 'employee', 'elbow', 'equation', 'ethics', 'expose', 'embrace', \n      'endure', 'extent', 'enhance', 'economic', 'effect', 'enjoy', 'edition', \n      'electron', 'enemy', 'episode', 'estate', 'excess', 'extreme', 'emphasis', \n      'expand', 'element', 'elephant', 'function', 'flex', 'fraud', 'fade', 'faithful', \n      'familiar', 'finger', 'fame', 'free', 'forward', 'follow', 'fruit', 'fall', \n      'fair', 'fix', 'flu', 'football', 'frank', 'feedback', 'fill', 'feather', \n      'frighten', 'forum', 'freeze', 'frown', 'factor', 'form', 'fleet', 'fan', \n      'fling', 'fragment', 'factory', 'ferry', 'feast', 'fast', 'fitness', 'folk', \n      'food', 'foot', 'governor', 'glory', 'god', 'gain', 'groan', 'glue', 'growth', \n      'glimpse', 'grand', 'glove', 'gloom', 'gallery', 'grant', 'general', 'graphic', \n      'goat', 'gift', 'grateful', 'guess', 'give', 'gown', 'glow', 'goal', 'gaffe', \n      'grounds', 'ghost', 'gasp', 'grain', 'garbage', 'gutter', 'golf', 'grass', \n      'gate', 'game', 'grow', 'guest', 'generate', 'gem', 'genetic', 'guilt', 'hair', \n      'harmony', 'heat', 'hook', 'hiccup', 'harsh', 'hand', 'happen', 'heavy', 'have', \n      'hour', 'hunter', 'heal', 'habit', 'hit', 'hotdog', 'hope', 'hut', 'hesitate', \n      'hospital', 'hostile', 'honest', 'huge', 'holiday', 'hip', 'hardware', 'hall', \n      'herb', 'hostage', 'hen', 'humanity', 'hay', 'history', 'head', 'hero', \n      'hunting', 'haircut', 'help', 'hardship', 'horror', 'illusion', 'identity', \n      'injury', 'inflate', 'index', 'impound', 'insist', 'irony', 'include', 'impulse', \n      'indoor', 'iron', 'imperial', 'image', 'item', 'immune', 'imposter', 'indulge', \n      'impact', 'ignite', 'inn', 'insert', 'impress', 'inch', 'illness', 'import', \n      'indirect', 'inquiry', 'idea', 'issue', 'initial', 'ideology', 'instinct', \n      'industry', 'ignorant', 'implicit', 'insure', 'infect', 'invasion', 'install', \n      'jacket', 'jet', 'justify', 'jaw', 'jewel', 'jam', 'joint', 'jealous', 'judgment', \n      'just', 'jump', 'jail', 'justice', 'jest', 'jelly', 'job', 'joystick', 'joy', \n      'junior', 'joke', 'keep', 'kitchen', 'kit', 'knock', 'kneel', 'knit', 'kid', \n      'kinship', 'knot', 'kick', 'kettle', 'know', 'king', 'key', 'knee', 'kill', \n      'loss', 'lean', 'lease', 'laser', 'letter', 'large', 'leaflet', 'layout', \n      'licence', 'lace', 'load', 'launch', 'loan', 'low', 'leave', 'live', \n      'ladder', 'liberty', 'leaf', 'lodge', 'left', 'leash', 'loose', 'lobby', \n      'last', 'limited', 'line', 'light', 'log', 'lid', 'leak', 'lie', 'list', \n      'learn', 'lemon', 'lonely', 'labour', 'long', 'laborer', 'literacy', 'margin', \n      'message', 'meal', 'mark', 'monopoly', 'mix', 'midnight', 'maximum', 'marriage', \n      'mole', 'monarch', 'mass', 'medicine', 'marathon', 'monk', 'major', 'moving', \n      'meet', 'mouth', 'middle', 'murder', 'mislead', 'mill', 'mood', 'matrix', \n      'minister', 'module', 'mug', 'mouse', 'mobile', 'miss', 'month', 'monster', \n      'measure', 'minimize', 'marine', 'menu', 'mourning', 'ministry', 'memorial', \n      'novel', 'nail', 'native', 'nervous', 'new', 'neutral', 'negative', 'note', \n      'net', 'nursery', 'noble', 'need', 'nut', 'nonsense', 'necklace', 'network', \n      'neglect', 'normal', 'nerve', 'name', 'narrow', 'node', 'nature', 'national', \n      'notebook', 'needle', 'nest', 'nap', 'news', 'nun', 'norm', 'navy', 'organize', \n      'order', 'obstacle', 'owe', 'officer', 'opposed', 'occupy', 'original', \n      'ordinary', 'outlook', 'output', 'offender', 'oil', 'organ', 'occasion', \n      'object', 'opera', 'other', 'owl', 'offer', 'obese', 'overview', 'owner', \n      'outer', 'offset', 'overlook', 'old', 'outline', 'offend', 'open', 'obscure', \n      'observer', 'oak', 'option', 'office', 'oral', 'opposite', 'onion', 'passion', \n      'priority', 'period', 'pepper', 'pure', 'pile', 'pain', 'pull', 'pottery', \n      'preach', 'press', 'password', 'pop', 'pursuit', 'pyramid', 'promise', \n      'produce', 'pig', 'pigeon', 'prisoner', 'predict', 'player', 'plead', 'pot', \n      'plug', 'passage', 'plane', 'plot', 'parade', 'pit', 'peasant', 'patent', \n      'possible', 'painter', 'posture', 'poor', 'polite', 'pardon', 'pass', 'plan', \n      'quality', 'quota', 'quaint', 'quit', 'quest', 'question', 'queen', 'quarter', \n      'queue', 'reign', 'regular', 'real', 'rear', 'racism', 'redeem', 'reflect', \n      'retired', 'reporter', 'row', 'revive', 'revise', 'remedy', 'ranch', 'rotten', \n      'result', 'regret', 'rotation', 'reverse', 'rescue', 'referral', 'run', \n      'reward', 'rumor', 'rack', 'review', 'rifle', 'reveal', 'rock', 'recover', \n      'retiree', 'range', 'restrain', 'report', 'reliable', 'rank', 'raise', 'ruin', \n      'retreat', 'regard', 'suburb', 'species', 'snub', 'social', 'stand', 'spirit', \n      'steam', 'surgeon', 'score', 'sick', 'society', 'spectrum', 'siege', 'scrap', \n      'stable', 'sketch', 'sweep', 'skeleton', 'strange', 'silver', 'stem', 'silk', \n      'sour', 'still', 'speech', 'steep', 'sheep', 'syndrome', 'spit', 'spring', \n      'stride', 'swell', 'sulphur', 'sail', 'small', 'salt', 'surround', 'sweet', \n      'slip', 'thank', 'terrace', 'theme', 'thin', 'trunk', 'team', 'tract', \n      'tongue', 'tear', 'trick', 'tendency', 'torture', 'theater', 'tenant', 'tension', \n      'trade', 'tiptoe', 'ton', 'taste', 'term', 'tissue', 'teenager', 'table', \n      'train', 'thesis', 'thirsty', 'tidy', 'tower', 'tasty', 'terms', 'tropical', \n      'timber', 'treat', 'tough', 'tank', 'tight', 'talk', 'trance', 'tablet', \n      'unfair', 'urge', 'use', 'useful', 'unlike', 'undress', 'union', 'user', \n      'utter', 'unaware', 'uniform', 'uncle', 'unity', 'upset', 'vein', 'virus', \n      'voyage', 'view', 'volcano', 'vessel', 'virtue', 'vote', 'vacuum', 'village', \n      'visual', 'valley', 'vision', 'velvet', 'vehicle', 'voice', 'programmer',\n      'valid', 'vain', 'vat', 'venture', 'value', 'voucher', 'video', 'variable', \n      'variant', 'veil', 'voter', 'wood', 'wind', 'want', 'way', 'waste', \n      'welfare', 'waiter', 'wrist', 'wild', 'winter', 'weigh', 'wine', 'wound', \n      'work', 'wardrobe', 'withdraw', 'worker', 'wage', 'worry', 'wife', 'wing', \n      'wolf', 'warn', 'workshop', 'witch', 'warning', 'war', 'woman', 'wrap', \n      'weed', 'wagon', 'weave', 'wake', 'widen', 'word', 'welcome', 'world', 'worth', \n      'youth', 'young', 'yearn', 'year', 'zero', 'zone', 'kanye', 'west', 'halo', \n      'covenant', 'grunt', 'arbiter', 'flood', 'elite', 'brute', 'pelican', \n      'spartan', 'scarab', 'terminal', 'bungie', 'reach', 'heroic', 'legendary', \n      'skull', 'recon', 'heretic', 'forerunner', 'jackal'\n    ];\n  }\n\n  randomWord() {\n    const randomIdx = Math.floor(this.words.length * Math.random());\n    return this.words[randomIdx];\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dictionary);\n\n//# sourceURL=webpack:///./src/dictionary.js?");

/***/ }),

/***/ "./src/flood.js":
/*!**********************!*\
  !*** ./src/flood.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Flood {\n  constructor(options) {\n    this.x = options.x;\n    this.y = options.y;\n    this.word = options.word;\n    this.dx = 10;\n    this.dy = 0;\n    this.shiftSX = 648;\n    this.shiftSW = 60;\n    this.shiftDW = 110;\n\n    this.floodImg = new Image();\n    this.floodImg.src = \"../public/images/Flood.png\";\n  }\n\n  // draw(ctx) {\n  //   ctx.beginPath();\n  //   ctx.fillStyle = this.color;\n  //   ctx.arc(this.x, this.y, this.radius, 0, 2.0 * Math.PI);\n  //   ctx.fill();\n  // }\n\n  draw(ctx) {\n    // Frame 1\n    ctx.drawImage(this.floodImg,\n      this.shiftSX, 826,\n      60, 46,\n      this.x, this.y,\n      110, 90\n    )\n\n    // Frame 2\n    // ctx.drawImage(this.floodImg,\n    //   710, 826,\n    //   74, 46,\n    //   this.x, this.y,\n    //   125, 90\n    // )\n\n    // Frame 3\n    // ctx.drawImage(this.floodImg,\n    //   785, 826,\n    //   74, 46,\n    //   this.x, this.y,\n    //   140, 90\n    // )\n  }\n\n  drawWord(ctx) {\n    ctx.beginPath();\n      ctx.fillStyle = \"white\";\n      ctx.fillText(this.word, this.x + 10, this.y - 10);\n      ctx.font = '18px \"Arial\"';\n      ctx.fill();\n  }\n\n  animateFlood() {\n    this.converge();\n    this.x += this.dx;\n    this.y += this.dy;\n    if (this.shiftSX === 648) {\n      this.shiftSX = 710;\n    } else if (this.shiftSX === 710) {\n      this.shiftSX = 648;\n    } \n    // else if (this.shiftSX === 783) {\n    //   this.shiftSX = 648;\n    // }\n\n    // if (this.shiftSW === 60) {\n    //   this.shiftSW = 74;\n    // } else if (this.shiftSW === 74) {\n    //   this.shiftSW = 60;\n    // }\n\n    // if (this.shiftDW < 140) {\n    //   this.shiftDW += 15;\n    // } else {\n    //   this.shiftDW = 110;\n    // }\n\n    // this.shift\n  }\n\n  converge() {\n    if (this.x >= 500) {\n      if (this.y < 260) {\n        this.dy = 7.5;\n      } else if (this.y > 260) {\n        this.dy = -7.5;\n      } else {\n        this.dy = 0;\n      }\n    }\n\n    if (this.x >= 750) {\n      this.dx = 0;\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flood);\n\n//# sourceURL=webpack:///./src/flood.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dictionary */ \"./src/dictionary.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _flood__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flood */ \"./src/flood.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\n\n\nclass Game {\n  constructor(ctx) {\n    this.flood = [];\n    this.player = [];\n    this.ctx = ctx;\n    this.dictionary = new _dictionary__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\n\n    this.spawnFlood();\n    this.spawnPlayer();\n    this.draw(this.ctx);\n  }\n  \n  spawnFlood() {\n    for (let i = 0; i < 1; i++) {\n      let floodObj = new _flood__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        x: -100,\n        y: _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].randomY(),\n        word: this.dictionary.randomWord()\n      });\n      this.flood.push(floodObj);\n    }\n  }\n\n  spawnPlayer() {\n    let playerObj = new _player__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    this.player.push(playerObj);\n  }\n\n  allObjects() {\n    return this.player.concat(this.flood);\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n\n    this.allObjects().forEach(object => {\n      object.draw(ctx);\n      if (object instanceof _flood__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n        object.drawWord(ctx);\n      }\n    });\n  }\n\n  moveFlood() {\n    this.flood.forEach(object => {\n      object.animateFlood();\n    });\n  }\n\n  step() {\n    this.moveFlood();\n  }\n}\n\nGame.DIM_X = 1050;\nGame.DIM_Y = 515;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass GameView {\n  constructor(game, ctx) {\n    this.ctx = ctx;\n    this.game = game;\n    this.then = Date.now();\n  }\n\n  start() {\n    requestAnimationFrame(this.animate.bind(this));\n  }\n\n  animate() {\n    let fps = 10;\n    let interval = 1000 / fps;\n    let now = Date.now();\n    let delta = now - this.then;\n\n    if (delta > interval) {\n      this.game.step(delta);\n      this.game.draw(this.ctx);\n      this.then = now;\n    }\n    \n    //   // this.game.moveFlood();\n\n    \n\n    requestAnimationFrame(this.animate.bind(this));\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n/* harmony import */ var _flood__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flood */ \"./src/flood.js\");\n\n\n\n\nwindow.Flood = _flood__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"viewport\");\n\n  const ctx = canvas.getContext(\"2d\");\n\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  new _game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, ctx).start();\n\n  // const playerImg = new Image();\n  // playerImg.src = \"../public/images/MasterChief.png\";\n\n  // this.ctx.drawImage()\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n  constructor() {\n    this.radius = 10;\n    this.color = \"red\";\n    this.attack = false;\n\n    this.playerImg = new Image();\n    this.playerImg.src = \"../public/images/MasterChief.png\";\n  }\n\n  // draw(ctx) {\n  //   ctx.fillStyle = this.color;\n  //   ctx.arc(this.x, this.y, this.radius, 0, 2.0 * Math.PI);\n  //   ctx.fill();\n  // }\n\n  draw(ctx) {\n    if (this.attack) {\n      ctx.drawImage(this.playerImg,\n        512.5, 0,\n        51.25, 73.25,\n        800, 240,\n        84, 120\n      );\n    } else {\n      ctx.drawImage(this.playerImg, \n        564.75, 0,\n        51.25, 73.25,\n        800, 240,\n        84, 120\n      );\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst Util = {\n  randomX() {\n    return Math.floor(860 * Math.random());\n  },\n  randomY() {\n    return Math.floor(270 * Math.random() + 245);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Util);\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });
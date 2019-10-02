class Dictionary {
  constructor() { 
    this.words = [
      'sir', 'finishing', 'this', 'fight', 'adjust', 'answer', 'action', 'apology', 
      'arise', 'asylum', 'agent', 'ash', 'anger', 'attic', 'amuse', 'auction', 
      'acquit', 'apple', 'admit', 'advance', 'athlete', 'anxiety', 'age', 'analyst', 
      'allow', 'agenda', 'adviser', 'aspect', 'appear', 'assault', 'absorb', 'aunt', 
      'average', 'accent', 'adopt', 'alive', 'ankle', 'area', 'agree', 'applied', 
      'abbey', 'ally', 'avenue', 'alarm', 'bee', 'belly', 'bridge', 'beg', 'burst', 
      'bus', 'bathtub', 'blonde', 'blind', 'bother', 'bold', 'baby', 'bench', 'bloody', 
      'blue', 'bare', 'brother', 'border', 'bride', 'biscuit', 'bean', 'benefit', 
      'brain', 'basic', 'bulb', 'bullet', 'bite', 'bend', 'bed', 'behead', 'boy', 
      'bland', 'basis', 'breeze', 'brink', 'burn', 'bedroom', 'bake', 'bring', 'code', 
      'cash', 'convert', 'cater', 'column', 'cabin', 'call', 'creep', 'corn', 'card', 
      'curve', 'chip', 'cousin', 'cope', 'crystal', 'crash', 'clean', 'creed', 
      'class', 'chord', 'core', 'contact', 'craft', 'courage', 'change', 'convict', 
      'cotton', 'chest', 'cast', 'camera', 'care', 'court', 'current', 'camp', 
      'cabinet', 'crack', 'charge', 'city', 'cream', 'compose', 'drop', 'deliver', 
      'dribble', 'distant', 'decide', 'dose', 'discuss', 'defend', 'disclose', 'dairy', 
      'dilemma', 'debate', 'delete', 'deficit', 'dozen', 'deadly', 'deer', 'dish', 
      'dare', 'doctor', 'deposit', 'detail', 'dressing', 'double', 'displace', 
      'delivery', 'dollar', 'dorm', 'depart', 'differ', 'disgrace', 'dentist', 
      'drift', 'diet', 'dialogue', 'document', 'distort', 'dedicate', 'director', 
      'deep', 'emotion', 'edge', 'evening', 'extort', 'exchange', 'ear', 'equal', 
      'expect', 'equinox', 'exact', 'efflux', 'econobox', 'entry', 'extract', 
      'effort', 'employee', 'elbow', 'equation', 'ethics', 'expose', 'embrace', 
      'endure', 'extent', 'enhance', 'economic', 'effect', 'enjoy', 'edition', 
      'electron', 'enemy', 'episode', 'estate', 'excess', 'extreme', 'emphasis', 
      'expand', 'element', 'elephant', 'function', 'flex', 'fraud', 'fade', 'faithful', 
      'familiar', 'finger', 'fame', 'free', 'forward', 'follow', 'fruit', 'fall', 
      'fair', 'fix', 'flu', 'football', 'frank', 'feedback', 'fill', 'feather', 
      'frighten', 'forum', 'freeze', 'frown', 'factor', 'form', 'fleet', 'fan', 
      'fling', 'fragment', 'factory', 'ferry', 'feast', 'fast', 'fitness', 'folk', 
      'food', 'foot', 'governor', 'glory', 'god', 'gain', 'groan', 'glue', 'growth', 
      'glimpse', 'grand', 'glove', 'gloom', 'gallery', 'grant', 'general', 'graphic', 
      'goat', 'gift', 'grateful', 'guess', 'give', 'gown', 'glow', 'goal', 'gaffe', 
      'grounds', 'ghost', 'gasp', 'grain', 'garbage', 'gutter', 'golf', 'grass', 
      'gate', 'game', 'grow', 'guest', 'generate', 'gem', 'genetic', 'guilt', 'hair', 
      'harmony', 'heat', 'hook', 'hiccup', 'harsh', 'hand', 'happen', 'heavy', 'have', 
      'hour', 'hunter', 'heal', 'habit', 'hit', 'hotdog', 'hope', 'hut', 'hesitate', 
      'hospital', 'hostile', 'honest', 'huge', 'holiday', 'hip', 'hardware', 'hall', 
      'herb', 'hostage', 'hen', 'humanity', 'hay', 'history', 'head', 'hero', 
      'hunting', 'haircut', 'help', 'hardship', 'horror', 'illusion', 'identity', 
      'injury', 'inflate', 'index', 'impound', 'insist', 'irony', 'include', 'impulse', 
      'indoor', 'iron', 'imperial', 'image', 'item', 'immune', 'imposter', 'indulge', 
      'impact', 'ignite', 'inn', 'insert', 'impress', 'inch', 'illness', 'import', 
      'indirect', 'inquiry', 'idea', 'issue', 'initial', 'ideology', 'instinct', 
      'industry', 'ignorant', 'implicit', 'insure', 'infect', 'invasion', 'install', 
      'jacket', 'jet', 'justify', 'jaw', 'jewel', 'jam', 'joint', 'jealous', 'judgment', 
      'just', 'jump', 'jail', 'justice', 'jest', 'jelly', 'job', 'joystick', 'joy', 
      'junior', 'joke', 'keep', 'kitchen', 'kit', 'knock', 'kneel', 'knit', 'kid', 
      'kinship', 'knot', 'kick', 'kettle', 'know', 'king', 'key', 'knee', 'kill', 
      'loss', 'lean', 'lease', 'laser', 'letter', 'large', 'leaflet', 'layout', 
      'licence', 'lace', 'load', 'launch', 'loan', 'low', 'leave', 'live', 
      'ladder', 'liberty', 'leaf', 'lodge', 'left', 'leash', 'loose', 'lobby', 
      'last', 'limited', 'line', 'light', 'log', 'lid', 'leak', 'lie', 'list', 
      'learn', 'lemon', 'lonely', 'labour', 'long', 'laborer', 'literacy', 'margin', 
      'message', 'meal', 'mark', 'monopoly', 'mix', 'midnight', 'maximum', 'marriage', 
      'mole', 'monarch', 'mass', 'medicine', 'marathon', 'monk', 'major', 'moving', 
      'meet', 'mouth', 'middle', 'murder', 'mislead', 'mill', 'mood', 'matrix', 
      'minister', 'module', 'mug', 'mouse', 'mobile', 'miss', 'month', 'monster', 
      'measure', 'minimize', 'marine', 'menu', 'mourning', 'ministry', 'memorial', 
      'novel', 'nail', 'native', 'nervous', 'new', 'neutral', 'negative', 'note', 
      'net', 'nursery', 'noble', 'need', 'nut', 'nonsense', 'necklace', 'network', 
      'neglect', 'normal', 'nerve', 'name', 'narrow', 'node', 'nature', 'national', 
      'notebook', 'needle', 'nest', 'nap', 'news', 'nun', 'norm', 'navy', 'organize', 
      'order', 'obstacle', 'owe', 'officer', 'opposed', 'occupy', 'original', 
      'ordinary', 'outlook', 'output', 'offender', 'oil', 'organ', 'occasion', 
      'object', 'opera', 'other', 'owl', 'offer', 'obese', 'overview', 'owner', 
      'outer', 'offset', 'overlook', 'old', 'outline', 'offend', 'open', 'obscure', 
      'observer', 'oak', 'option', 'office', 'oral', 'opposite', 'onion', 'passion', 
      'priority', 'period', 'pepper', 'pure', 'pile', 'pain', 'pull', 'pottery', 
      'preach', 'press', 'password', 'pop', 'pursuit', 'pyramid', 'promise', 
      'produce', 'pig', 'pigeon', 'prisoner', 'predict', 'player', 'plead', 'pot', 
      'plug', 'passage', 'plane', 'plot', 'parade', 'pit', 'peasant', 'patent', 
      'possible', 'painter', 'posture', 'poor', 'polite', 'pardon', 'pass', 'plan', 
      'quality', 'quota', 'quaint', 'quit', 'quest', 'question', 'queen', 'quarter', 
      'queue', 'reign', 'regular', 'real', 'rear', 'racism', 'redeem', 'reflect', 
      'retired', 'reporter', 'row', 'revive', 'revise', 'remedy', 'ranch', 'rotten', 
      'result', 'regret', 'rotation', 'reverse', 'rescue', 'referral', 'run', 
      'reward', 'rumor', 'rack', 'review', 'rifle', 'reveal', 'rock', 'recover', 
      'retiree', 'range', 'restrain', 'report', 'reliable', 'rank', 'raise', 'ruin', 
      'retreat', 'regard', 'suburb', 'species', 'snub', 'social', 'stand', 'spirit', 
      'steam', 'surgeon', 'score', 'sick', 'society', 'spectrum', 'siege', 'scrap', 
      'stable', 'sketch', 'sweep', 'skeleton', 'strange', 'silver', 'stem', 'silk', 
      'sour', 'still', 'speech', 'steep', 'sheep', 'syndrome', 'spit', 'spring', 
      'stride', 'swell', 'sulphur', 'sail', 'small', 'salt', 'surround', 'sweet', 
      'slip', 'thank', 'terrace', 'theme', 'thin', 'trunk', 'team', 'tract', 
      'tongue', 'tear', 'trick', 'tendency', 'torture', 'theater', 'tenant', 'tension', 
      'trade', 'tiptoe', 'ton', 'taste', 'term', 'tissue', 'teenager', 'table', 
      'train', 'thesis', 'thirsty', 'tidy', 'tower', 'tasty', 'terms', 'tropical', 
      'timber', 'treat', 'tough', 'tank', 'tight', 'talk', 'trance', 'tablet', 
      'unfair', 'urge', 'use', 'useful', 'unlike', 'undress', 'union', 'user', 
      'utter', 'unaware', 'uniform', 'uncle', 'unity', 'upset', 'vein', 'virus', 
      'voyage', 'view', 'volcano', 'vessel', 'virtue', 'vote', 'vacuum', 'village', 
      'visual', 'valley', 'vision', 'velvet', 'vehicle', 'voice', 'programmer',
      'valid', 'vain', 'vat', 'venture', 'value', 'voucher', 'video', 'variable', 
      'variant', 'veil', 'voter', 'wood', 'wind', 'want', 'way', 'waste', 
      'welfare', 'waiter', 'wrist', 'wild', 'winter', 'weigh', 'wine', 'wound', 
      'work', 'wardrobe', 'withdraw', 'worker', 'wage', 'worry', 'wife', 'wing', 
      'wolf', 'warn', 'workshop', 'witch', 'warning', 'war', 'woman', 'wrap', 
      'weed', 'wagon', 'weave', 'wake', 'widen', 'word', 'welcome', 'world', 'worth', 
      'youth', 'young', 'yearn', 'year', 'zero', 'zone', 'kanye', 'west', 'halo', 
      'covenant', 'grunt', 'arbiter', 'flood', 'elite', 'brute', 'pelican', 
      'spartan', 'scarab', 'terminal', 'bungie', 'reach', 'heroic', 'legendary', 
      'skull', 'recon', 'heretic', 'forerunner', 'jackal'
    ];
  }

  randomWord() {
    const randomIdx = Math.floor(this.words.length * Math.random());
    return this.words[randomIdx];
  }
}

export default Dictionary;
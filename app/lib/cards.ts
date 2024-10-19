import chariot from '../../public/images/majorarcana/CHARIOT.png'
import death from '../../public/images/majorarcana/DEATH.png'
import devil from '../../public/images/majorarcana/DEVIL.png'
import emperor from '../../public/images/majorarcana/EMPEROR.png'
import emperess from '../../public/images/majorarcana/EMPRESS.png'
import fool from '../../public/images/majorarcana/FOOL.png'
import hangedMan from '../../public/images/majorarcana/HANGED_MAN.png'
import hermit from '../../public/images/majorarcana/HERMIT.png'
import hierophant from '../../public/images/majorarcana/HIEROPHANT.png'
import highPriestess from '../../public/images/majorarcana/HIGH_PRIESTESS.png'
import judgement from '../../public/images/majorarcana/JUDGEMENT.png'
import justice from '../../public/images/majorarcana/JUSTICE.png'
import lovers from '../../public/images/majorarcana/LOVERS.png'
import magician from '../../public/images/majorarcana/MAGICIAN.png'
import moon from '../../public/images/majorarcana/MOON.png'
import star from '../../public/images/majorarcana/STAR.png'
import strength from '../../public/images/majorarcana/STRENGTH.png'
import sun from '../../public/images/majorarcana/SUN.png'
import temperance from '../../public/images/majorarcana/TEMPERANCE.png'
import tower from '../../public/images/majorarcana/TOWER.png'
import wheelOfFortune from '../../public/images/majorarcana/WHEEL_OF_FORTUNE.png'
import world from '../../public/images/majorarcana/WORLD.png'

const cards = {
    'chariot': chariot,
    'death': death,
    'devil': devil,
    'emperor': emperor,
    'emperess': emperess,
    'fool': fool,
    'hangedMan': hangedMan,
    'hermit': hermit,
    'hierophant': hierophant,
    'highPriestess': highPriestess,
    'judgement': judgement,
    'justice': justice,
    'lovers': lovers,
    'magician': magician,
    'moon': moon,
    'star': star,
    'strength': strength,
    'sun': sun,
    'temperance': temperance,
    'tower': tower,
    'wheelOfFortune': wheelOfFortune,
    'world': world
}

const cardsArray: (keyof typeof cards)[] = [
    'chariot',
    'death',
    'devil',
    'emperor',
    'emperess',
    'fool',
    'hangedMan',
    'hermit',
    'hierophant',
    'highPriestess',
    'judgement',
    'justice',
    'lovers',
    'magician',
    'moon',
    'star',
    'strength',
    'sun',
    'temperance',
    'tower',
    'wheelOfFortune',
    'world'
]

export function getRandomMajorCard() {
    const card = cardsArray[Math.floor(Math.random() * cardsArray.length)]
    return cards[card]
}


import { Gallery } from '../models/gallery';
import { JCD_PROJECT_ENUM } from './gallery-constants';
import {
  AGAMEMNON_GALLERY,
  ART_GALLERY,
  BYU_GALLERY,
  CABARET_GALLERY,
  CINDERELLA_GALLERY,
  FAT_PIG_GALLERY,
  JAMES_AND_THE_GIANT_PEACH_GALLERY,
  LARAMIE_GALLERY,
  MRBURNS_GALLERY,
  NEXT_FALL_GALLERY,
  RENAISSANCE_FAIRE_GALLERY,
  RENAISSANCE_NOW_GALLERY,
  SUNDANCE_GALLERY,
  SWEENEY_GALLERY,
  TAMINGOFTHESHREW_GALLERY,
  THE_DRAG_GALLERY,
  TRIBES_GALLERY,
  URINETOWN_GALLERY,
  UVU_GALLERY,
} from './image-uris';

export const SCENIC_GALLERY_PAGES: Gallery[] = [
  new Gallery(
    JCD_PROJECT_ENUM.JAMES_AND_THE_GIANT_PEACH,
    JAMES_AND_THE_GIANT_PEACH_GALLERY,
    'James and the Giant Peach',
    'james-and-the-giant-peach',
    'Utah Valley University',
    'scenic & properties design',
    [
      'Directed by Dr. Lisa Hall',
      'Choreography by Chantelle Wells',
      'Technical Direction by Cristian Bell & Glenn Pepe',
      'Lighting Design by Colin Skip Wilson',
      'Costume Design by Dayna Kay Gomar',
      'Hair & Makeup Design by Kate Backman',
      'Production Photography by Suzy Oliveira',
    ],
    'November 2021',
    [
      {
        description: '“The set and costume design created a mesmerizing and immersive atmosphere. It had a cutout of the titular peach artfully inlaid with flowers which acted as the center of the production, but there were further elements with clouds above and the city skyline in the background which gave it a sense of depth and variety.”',
        link: {
          label: '"James and the Giant Peach” - A Fun, Whimsical Story About Finding One’s Home',
          uri: 'https://www.uvureview.com/valley-life/artsculture/james-and-the-giant-peach-a-fun-whimsical-story-about-finding-ones-home/',
        },
        publication: '(UVU Review)',
      },
    ],
    [
      'Book by Timothy Allen McDonald',
      'Music & Lyrics by Benj Pasek & Justin Paul',
    ],
  ),
  new Gallery(
    JCD_PROJECT_ENUM.CINDERELLA,
    CINDERELLA_GALLERY,
    'Cinderella Eats Rice and Beans',
    'cinderella',
    'Utah Valley University',
    'scenic & properties design',
    [
      'Directed by Megan Ann Rasmussen',
      'Technical Direction by Glenn Pepe',
      'Costume Design by Michelle Walling',
      'Hair & Makeup Design by Kiyomi Coronado',
      'Production Photography by Suzy Oliveira',
    ],
    'February 2021',
    [],
    [
      'Book and Lyrics by Karen Zacarías',
      'Music by Deborah Wicks La Puma',
    ]
  ),
  new Gallery(
    JCD_PROJECT_ENUM.SWEENEY,
    SWEENEY_GALLERY,
    'Sweeney Todd: The Demon Barber of Fleet Street',
    'sweeney-todd',
    'The Noorda Center for the Performing Arts & Utah Repertory Theater Company',
    'associate set design',
    [
      'Directed by Tim Threlfall',
      'Technical Direction & Build by Nat Reed',
      'Set Design by Josh Steadman',
      'Properties Design by Rachel Summerhalder',
      'Lighting Design by Jaron Kent Hermansen',
      'Costume Design by Nancy Cannon',
      'Hair & Makeup Design by Samantha Lambson',
      'Production Photography by Jay Drowns',
      'BTS Photography by Janice Chan',
    ],
    'October 2019',
    [
      {
        link: {
          label: 'Sweeney Todd: The Demon Barber of Fleet Street at Utah Valley University is Bloody Superb',
          uri: 'https://frontrowreviewersutah.com/?p=13952',
        },
        publication: '(Front Row Reviewers)'
      },
      {
        link: {
          label: 'Utah Repertory Theater’s SWEENEY TODD Is A Reminder Of What Happens When A Person’s Heart Is Guided Completely By Revenge',
          uri: 'https://www.broadwayworld.com/salt-lake-city/article/BWW-Review-Utah-Repertory-Theaters-SWEENEY-TODD-Is-A-Reminder-Of-What-Happens-When-A-Persons-Heart-Is-Guided-Completely-By-Revenge-20191029',
        },
        publication: '(BroadwayWorld Review)'
      },
      {
        link: {
          label: 'SWEENEY TODD, a Utah Rep and Noorda Center Co-Production, Wildly Heralded',
          uri: 'https://www.broadwayworld.com/salt-lake-city/article/BWW-Feature-SWEENEY-TODD-a-Utah-Rep-and-Noorda-Center-Co-Production-Wildly-Heralded-20191115',
        },
        publication: '(BroadwayWorld Feature)'
      },
      {
        link: {
          label: 'Utah Repertory Theater’s Sweeney Todd is a Bloody Good Time',
          uri: 'https://www.uvureview.com/valley-life/artsculture/utah-repertory-theaters-sweeney-todd-is-a-bloody-good-time/',
        },
        publication: '(UVU Review)'
      },
    ],
    [
      'Book by Hugh Wheeler',
      'Music & Lyrics by Stephen Sondheim',
    ],
  ),
  new Gallery(
    JCD_PROJECT_ENUM.URINETOWN,
    URINETOWN_GALLERY,
    'Urinetown: The Musical',
    'urinetown-the-musical',
    'Utah Valley University',
    'scenic & props designer',
    [
      'Directed by Matthew Herrick',
      'Technical Direction by Glenn Pepe',
      'Assistant Scenic & Properties Design by Gavin Henry',
      'Lighting Design by Colin Skip Wilson',
      'Costume Design by Mallory Goodman',
      'Hair & Makeup Design Kate Backman',
      'Production Photography by Jeremy Hall',
    ],
    'September 2019',
    [
      {
        description: '“The set, by Janice Chan, is hewn in rough scaffolding in browns and oranges and is cleverly constructed to break apart and accommodate the different scenes from the corporate suite to the sewer.”',
        link: {
          label: 'Urinetown at UVU is Streaming with Great Talent and Dark Humor',
          uri: 'https://frontrowreviewersutah.com/?p=13681',
        },
        publication: '(Front Row Reviewers)'
      }
    ],
    [
      'Book by Greg Kotis',
      'Music & Lyrics by Mark Hollmann & Greg Kotis',
    ]
  ),
  new Gallery(
    JCD_PROJECT_ENUM.TAMINGOFTHESHREW,
    TAMINGOFTHESHREW_GALLERY,
    'Taming Of The Shrew',
    'taming-of-the-shrew',
    'Utah Valley University',
    'scenic & properties design',
    [
      'Directed by Shelby Gist',
      'Lighting Design by Emma Belnap',
      'Costume Design by Danae Devey',
      'Hair & Makeup Design by Alanna Cottam',
      'Production Photography by Shelby Gist & Janice Chan',
    ],
    'May 2019',
    [
      {
        link: {
          label: 'UVU \'Taming of the Shrew\' Shines Light on Domestic Violence',
          uri: 'https://www.heraldextra.com/entertainment/2019/may/23/uvu-taming-of-the-shrew-shines-light-on-domestic-violence/',
        },
        publication: '(Daily Herald)',
      }
    ],
    [
      'Written by William Shakespeare',
      'Adapted by Chelsea Hickman',
    ]
  ),
  new Gallery(
    JCD_PROJECT_ENUM.MRBURNS,
    MRBURNS_GALLERY,
    'Mr. Burns, a Post-Electric Play',
    'mr-burns',
    'An Other Theater Company',
    'scenic & properties design',
    [
      'Directed by Kacey Spadafora & Taylor Jack Nelson',
      'Scenic Painting by Janice Chan',
      'Lighting Design by Emma Belnap',
      'Costume Design by: Janae Lefleur',
      'Production Photography by Laura Chapman & Janice Chan',
    ],
    'July 2019',
    [
      {
        description: '“Janice Chan\'s set and prop design feel perfectly tuned to the bare-bones theatrical group with a splash of the cartoon humor that the story draws its inspiration from.”',
        link: {
          label: 'An Other Theater Company\'s Mr. Burns, A Post Electric Play in Provo is Funny, Sobering, Thought-Provoking, and Utterly Multifariously Unique”',
          uri: 'https://frontrowreviewersutah.com/?p=12791',
        },
        publication: '(Front Row Reviewers)',
      },
    ],
    [
      'Written by Anne Washburn',
    ],
  ),
  new Gallery(
    JCD_PROJECT_ENUM.LARAMIE,
    LARAMIE_GALLERY,
    'The Laramie Project',
    'the-laramie-project',
    'Utah Valley University',
    'scenic & properties design',
    [
      'Directed by Laurie Harrop-Purser',
      'Technical Direction by Cristian Bell',
      'Lighting Design by Colin Skip Wilson',
      'Projections Design by Emma Belnap',
      'Costume Design by Rae Sip & Kate Backman',
      'Hair & Makeup Design by Alanna Cottam',
      'Production Photos by Suzy Oliveira',
    ],
    'January 2019',
    [
      {
        description: '“Set designer Janice Chan orchestrated this in a way that seemingly transported the audience to another place.”',
        link: {
          label: '\'Laramie Project\' Asks Audiences to Examine Relationship to LGBT Community',
          uri: 'https://www.uvureview.com/news/front-page/recent/review-laramie-project-asks-audiences-to-examine-relationship-to-lgbtq-community/',
        },
        publication: '(UVU Review)',
      },
      {
        link: {
          label: 'UVU Play About Matthew Shepard Highlights Utah\'s Lack of Hate Crime Protections for LGBTQ',
          uri: 'https://www.abc4.com/news/local-news/uvu-play-about-matthew-shepard-highlights-utahs-lack-of-hate-crime-protections-for-lgbtq/',
        },
        publication: '(ABC4 News)',
      },
    ],
    [
      'Written by Moisés Kaufman',
      '& the members of the Tectonic Theater Project',
    ],
  ),
  new Gallery(
    JCD_PROJECT_ENUM.THE_DRAG,
    THE_DRAG_GALLERY,
    'The Drag',
    'the-drag',
    'An Other Theater Company',
    'scenic & properties design',
    [
      'Directed by Taylor Jack Nelson',
      'Scenic Painting by Janice Chan & Tyler Whited',
      'Lighting Design by Aimee Findley Moore',
      'Costume Design by Ash Knowles',
      'Hair & Makeup Design by Christopher-Alan Pederson',
      'Production Photography by Laura Chapman',
    ],
    'July 2018',
    [
      {
        description: '“Janice Chan\'s set and props create the perfect atmosphere for a jazz-age romp.”',
        link: {
          label: 'Is that The Drag at An Other Theater Company in Provo, or Are You Just Happy to See Me?',
          uri: 'https://frontrowreviewersutah.com/?p=8462',
        },
        publication: '(Front Row Reviewers)',
      },
    ],
    [
      'Written by Mae West',
    ],
  ),
  new Gallery(
    JCD_PROJECT_ENUM.CABARET,
    CABARET_GALLERY,
    'Cabaret',
    'cabaret',
    'Utah Valley University',
    'assistant scenic & properties design',
    [
      'Directed by Robert Moffat',
      'Technical Direction by Cristian Bell',
      'Scenic Design by Madeline Ashton',
      'Properties Design by Madeline Ashton',
      'Lighting Design by Emma Belnap',
      'Costume Design by Carolyn Urban',
      'Hair & Makeup Design by Shelby Gist',
      'Production Photography by Jeremy Hall',
    ],
    'April 2018',
    [
      {
        link: {
          label: 'CABARET Scintillates at Utah Valley University',
          uri: 'https://www.broadwayworld.com/salt-lake-city/article/BWW-Review-CABARET-Scintillates-at-Utah-Valley-University-20180416',
        },
        publication: '(BroadwayWorld Review)'
      },
      {
        link: {
          label: 'Cabaret at UVU Shows the Genuine Behind the Decadence',
          uri: 'https://frontrowreviewersutah.com/?p=7363',
        },
        publication: '(Front Row Reviewers)'
      },
    ],
    [
      'Book by Joe Masteroff',
      'Music by John Kander',
      'Lyrics by Fred Ebb ',
    ],
  ),
  new Gallery(
    JCD_PROJECT_ENUM.NEXT_FALL,
    NEXT_FALL_GALLERY,
    'Next Fall',
    'next-fall',
    'An Other Theater Company',
    'scenic & properties design',
    [
      'Directed by Kacey Spadafora',
      'Scenic Painting by Janice Chan & Cynthia Chan',
      'Lighting Design by Paige Porter',
      'Costume Design by Ash Knowles',
      'Production Photography by Laura Chapman',
    ],
    'May 2018',
    [
      {
        description: '“Janice Chan’s set design is also simple, but beautiful. Various locations are specified by changing the paintings on the wall and rearranging the furniture. Large geometric patterns in rich colors cover the back wall, creating a pleasing backdrop for the action.”',
        link: {
          label: 'Humor and Heartbreak in An Other Theater Company\'s Next Fall',
          uri: 'https://frontrowreviewersutah.com/?p=7596',
        },
        publication: '(Front Row Reviewers)',
      }
    ],
    [
      'Written by Geoffrey Nauffts',
    ],
  ),
  new Gallery(
    JCD_PROJECT_ENUM.AGAMEMNON,
    AGAMEMNON_GALLERY,
    'Agamemnon',
    'agamemnon',
    'Utah Valley University',
    'scenic design',
    [
      'Directed by Christopher Clark',
      'Properties Design by Aimee Moore',
      'Lighting Design by Aaron Gubler',
      'Costume Design by Mallory Goodman',
      'Production Photography by Deric Lambdin',
    ],
    'April 2018',
    [],
    [
      'Written by Aeschylus',
    ]
  ),
  new Gallery(
    JCD_PROJECT_ENUM.TRIBES,
    TRIBES_GALLERY,
    'Tribes',
    'tribes',
    'Utah Valley University',
    'scenic design',
    [
      'Directed by Hayley Lambdin',
      'Properties Design by McKenzie Kiser',
      'Lighting Design by Aaron Gubler',
      'Costume Design by Molly Pack',
      'Production Photography by Deric Lambdin',
    ],
    'January 2018',
    [],
    [
      'Written by Nina Raine',
    ]
  ),
  new Gallery(
    JCD_PROJECT_ENUM.FAT_PIG,
    FAT_PIG_GALLERY,
    'Fat Pig',
    'fat-pig',
    'An Other Theater Company',
    'scenic & properties design',
    [
      'Directed by Morag Shepherd',
      'Lighting Design by Paige Porter',
      'Costume Design by Chris Lancaster',
      'Production Photography by Laura Chapman',
    ],
    'January 2018',
    [
      {
        link: {
          label: 'Come Eat (and Face) Your Feelings at An Other Theater Company\'s Fat Pig',
          uri: 'https://frontrowreviewersutah.com/?p=6118'
        },
        publication: '(Front Row Reviewers)'
      }
    ],
    [
      'Written by Neil Labute',
    ]
  ),
  new Gallery(
    JCD_PROJECT_ENUM.UVU,
    UVU_GALLERY,
    'A Year with Frog and Toad',
    'a-year-with-frog-and-toad',
    'Utah Valley University',
    'assistant scenic design',
    [
      'Directed by Dr. Lisa Hall',
      'Technical Direction by Cristian Bell',
      'Scenic Design by Emma Belnap',
      'Properties Design by Alicia Freeman',
      'Lighting Design by Aaron Gubler',
      'Costume Design by Chris Lancaster',
      'Production Photography by Jeremy Hall',
    ],
    'November 2017',
    [],
    [
      'Book by Willie Reale',
      'Music & Lyrics by Robert Reale & Willie Reale',
    ]
  ),
  new Gallery(
    JCD_PROJECT_ENUM.SUNDANCE,
    SUNDANCE_GALLERY,
    'Joseph and the Amazing Technicolor Dreamcoat',
    'joseph-and-the-amazing-technicolor-dreamcoat',
    'Sundance Summer Theatre',
    'scenic painting',
    [
      'Directed by D. Terry Petrie',
      'Technical Direction by Cristian Bell',
      'Scenic Design by Stephen Purdy',
      'Properties Design by McKenzie Kiser',
      'Lighting Design by Matthew Taylor',
      'Costume Design by Nancy Cannon & Carla Summers',
      'BTS Photography by Janice Chan',
    ],
    'July 2017',
    [
      {
        link: {
          label: 'Live Drama in Robert Redford\'s Backyard',
          uri: 'https://www.parkcitymag.com/arts-and-culture/2017/06/live-drama-in-robert-redfords-backyard',
        },
        publication: '(Park City Magazine)',
      },
    ],
    [
      'Music by Andrew Lloyd Webber',
      'Lyrics by Tim Rice',
    ],
  ),
  new Gallery(
    JCD_PROJECT_ENUM.RENAISSANCE_NOW,
    RENAISSANCE_NOW_GALLERY,
    'The Taming of the Shrew',
    'the-taming-of-the-shrew',
    'Renaissance Now',
    'scenic designer, properties master',
    [
      'Director: Archelaus D. Crisanto',
      'Assistant Director: Sarah Butler',
      'Costumes: Amanda Louise Hellewell',
      'Photos: Bruce Miller, Janice Chan',
    ],
    '2017',
  ),
  new Gallery(
    JCD_PROJECT_ENUM.BYU,
    BYU_GALLERY,
    'Hamlet',
    'hamlet',
    'Brigham Young University',
    'scenic designer',
    [
      'Director: Chris Hults',
      'Lights: Kalea Crapo',
      'Sound: Matthew Kupferer',
      'Costumes: Sarah Ziegler',
      'Photos: Matthew Kupferer',
    ],
    '2017',
  ),
  new Gallery(
    JCD_PROJECT_ENUM.RENAISSANCE_FAIRE,
    RENAISSANCE_FAIRE_GALLERY,
    'Utah Renaissance Faire',
    'utah-renaissance-faire',
    'Utah Renaissance Faire',
    'prop painter',
    [],
    '2017, 2018',
  ),
  new Gallery(
    JCD_PROJECT_ENUM.ART,
    ART_GALLERY,
    '',
    'art',
    '',
    '',
    [],
    '',
  )
];

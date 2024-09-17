import React from "react"
import styles from "./index.module.css"

type CommitterData = {
    name: string,
    apacheId: string,
    isPMC: boolean,
}

// sorted by apacheId
const committers: CommitterData[] = [
    {name: 'Ahmad Emneina', apacheId: 'ahmad', isPMC: false},
    {name: 'Alex Huang', apacheId: 'ahuang', isPMC: true},
    {name: 'Alex Karasulu', apacheId: 'akarasulu', isPMC: true},
    {name: 'Alena Prokharchyk', apacheId: 'alena1108', isPMC: true},
    {name: 'Alexandre Mattioli', apacheId: 'alexandremattioli', isPMC: false},
    {name: 'Amogh Vasekar', apacheId: 'amoghvk', isPMC: false},
    {name: 'Andrija Panic', apacheId: 'andrijapanic', isPMC: false},
    {name: 'Animesh', apacheId: 'animesh', isPMC: true},
    {name: 'Anthony Xu', apacheId: 'anthonyxu', isPMC: false},
    {name: 'Abhinandan Prateek', apacheId: 'aprateek', isPMC: false},
    {name: 'Brian Federle', apacheId: 'bfederle', isPMC: false},
    {name: 'Boris Schrijver', apacheId: 'boris', isPMC: true},
    {name: 'Brett Porter', apacheId: 'brett', isPMC: false},
    {name: 'Bryan Lima', apacheId: 'bryan', isPMC: false},
    {name: 'Boris Stoyanov', apacheId: 'bstoyanov', isPMC: true},
    {name: 'Chip Childers', apacheId: 'chipchilders', isPMC: true},
    {name: 'Chiradeep Vittal', apacheId: 'chiradeep', isPMC: true},
    {name: 'Clayton Weise', apacheId: 'claytonweise', isPMC: false},
    {name: 'Chris Suich', apacheId: 'csuich2', isPMC: false},
    {name: 'Daan', apacheId: 'dahn', isPMC: true},
    {name: 'Darren Shepherd', apacheId: 'darren', isPMC: false},
    {name: 'David Jumani', apacheId: 'davidjumani', isPMC: false},
    {name: 'Dave Cahill', apacheId: 'dcahill', isPMC: false},
    {name: 'Demetrius Tsitrelis', apacheId: 'demetriust', isPMC: false},
    {name: 'Devdeep Singh', apacheId: 'devdeep', isPMC: false},
    {name: 'Dennis Konrad', apacheId: 'dkonrad', isPMC: false},
    {name: 'Dag Sonstebo', apacheId: 'dsonstebo', isPMC: false},
    {name: 'Ian Duffy', apacheId: 'duffy', isPMC: true},
    {name: 'Disheng Su', apacheId: 'edison', isPMC: true},
    {name: 'Wilder Rodrigues', apacheId: 'ekho', isPMC: true},
    {name: 'Erik Weber', apacheId: 'erikw', isPMC: true},
    {name: 'Frank Maximus', apacheId: 'fmaximus', isPMC: false},
    {name: 'Xin Zhang', apacheId: 'frankzhang', isPMC: false},
    {name: 'Gabriel Beims Bräscher', apacheId: 'gabriel', isPMC: true},
    {name: 'Gaurav Nandkumar Aradhye', apacheId: 'gaurav', isPMC: false},
    {name: 'Gavin Lee', apacheId: 'gavinlee', isPMC: false},
    {name: 'Giles Sirett', apacheId: 'giles', isPMC: true},
    {name: 'Girish Prabhakar Shilamkar', apacheId: 'girish', isPMC: false},
    {name: 'Go Chiba', apacheId: 'gochiba', isPMC: true},
    {name: 'Daniel Augusto Veronezi Salvador', apacheId: 'gutoveronezi', isPMC: true},
    {name: 'Toshiaki Hatano', apacheId: 'haeena', isPMC: false},
    {name: 'Harikrishna Patnala', apacheId: 'harikrishna', isPMC: true},
    {name: 'Geoff Higginbottom', apacheId: 'higster', isPMC: false},
    {name: 'Nguyen Mai Hoang', apacheId: 'hoangnm', isPMC: false},
    {name: 'Matt Richard Hogstrom', apacheId: 'hogstrom', isPMC: true},
    {name: 'Hugo Trippaers', apacheId: 'hugo', isPMC: true},
    {name: 'Ilya Musayev', apacheId: 'ilya', isPMC: true},
    {name: 'Isaac Chiang', apacheId: 'isaacchiang', isPMC: false},
    {name: 'Ivet Petrova', apacheId: 'ivet', isPMC: true},
    {name: 'Jayapal', apacheId: 'jayapal', isPMC: false},
    {name: 'Jason Bausewein', apacheId: 'jbausewein', isPMC: false},
    {name: 'John Burwell', apacheId: 'jburwell', isPMC: true},
    {name: 'Jessica Wang', apacheId: 'jessicawang', isPMC: false},
    {name: 'Jim Jagielski', apacheId: 'jim', isPMC: false},
    {name: 'John Kinsella', apacheId: 'jlk', isPMC: true},
    {name: 'João Jandre Paraquetti', apacheId: 'joao', isPMC: true},
    {name: 'John Bampton', apacheId: 'johnbam', isPMC: false},
    {name: 'Jessica Tomechak', apacheId: 'jtomechak', isPMC: false},
    {name: 'Joe Brockmeier', apacheId: 'jzb', isPMC: true},
    {name: 'Karen Vuong', apacheId: 'karenv', isPMC: true},
    {name: 'Hiroaki Kawai', apacheId: 'kawai', isPMC: false},
    {name: 'Kelcey Damage', apacheId: 'kdamage', isPMC: false},
    {name: 'David Nalley', apacheId: 'ke4qqq', isPMC: true},
    {name: 'Kelven Yang', apacheId: 'kelveny', isPMC: false},
    {name: 'Kiran Chavala', apacheId: 'kiranchavala', isPMC: false},
    {name: 'Kirk Kosinski', apacheId: 'kirk', isPMC: false},
    {name: 'Kishan', apacheId: 'kishan', isPMC: false},
    {name: 'Kevin Kluge', apacheId: 'kluge', isPMC:true },
    {name: 'Laszlo Hornyak', apacheId: 'kocka', isPMC: false},
    {name: 'Koushik Das', apacheId: 'koushik', isPMC: false},
    {name: 'Likitha Shetty', apacheId: 'likithas', isPMC: false},
    {name: 'Marc-Aurèle Brothier', apacheId: 'marcaurele', isPMC: false},
    {name: 'Min Chen', apacheId: 'mchen', isPMC: false},
    {name: 'Mice Xia', apacheId: 'mice', isPMC: false},
    {name: 'Bruno Demion', apacheId: 'milamber', isPMC: true},
    {name: 'Marcus Sorensen', apacheId: 'mlsorensen', isPMC: true},
    {name: 'Mohammad Nour El-Din', apacheId: 'mnour', isPMC: true},
    {name: 'Mark R. Hinkle', apacheId: 'mrhinkle', isPMC: true},
    {name: 'Marco Sinhoreli', apacheId: 'msinhore', isPMC: false},
    {name: 'Mike Tutkowski', apacheId: 'mtutkowski', isPMC: true},
    {name: 'Murali Mohan Reddy', apacheId: 'muralireddy', isPMC: false},
    {name: 'Nathan Johnson', apacheId: 'nathanejohnson', isPMC: true},
    {name: 'Nitin', apacheId: 'nitin', isPMC: false},
    {name: 'Noa Resare', apacheId: 'noa', isPMC: false},
    {name: 'Nux', apacheId: 'nux', isPMC: true},
    {name: 'Nicolás Vázquez', apacheId: 'nvazquez', isPMC: true},
    {name: 'Olivier Lamy', apacheId: 'olamy', isPMC: true},
    {name: 'Olga Smola', apacheId: 'olgasmola', isPMC: false},
    {name: 'Paul Angus', apacheId: 'paul_a', isPMC: true},
    {name: 'Pierre-Luc Dion', apacheId: 'pdion891', isPMC: true},
    {name: 'Pearl Dsilva', apacheId: 'pearl11594', isPMC: false},
    {name: 'Phong Nguyen', apacheId: 'pnguyen', isPMC: false},
    {name: 'Prachi Damle', apacheId: 'prachidamle', isPMC: false},
    {name: 'Pranav Saxena', apacheId: 'pranavs', isPMC: false},
    {name: 'Pierre-Yves Ritschard', apacheId: 'pyr', isPMC: false},
    {name: 'Radhika Nair', apacheId: 'radhika', isPMC: false},
    {name: 'Rafael Weingärtner', apacheId: 'rafael', isPMC: true},
    {name: 'Rajani Karuturi', apacheId: 'rajani', isPMC: true},
    {name: 'Rajesh Battala', apacheId: 'rajeshbattala', isPMC: false},
    {name: 'Rakesh Venkatesh', apacheId: 'rakeshv', isPMC: false},
    {name: 'Remi Bergsma', apacheId: 'remi', isPMC: true},
    {name: 'Rene Moser', apacheId: 'resmo', isPMC: true},
    {name: 'Rohit Yadav', apacheId: 'rohit', isPMC: true},
    {name: 'Rene Peinthor', apacheId: 'rp9', isPMC: false},
    {name: 'Sailaja Mada', apacheId: 'sailajamada', isPMC: false},
    {name: 'Saksham Srivastava', apacheId: 'saksham', isPMC: false},
    {name: 'Sangeetha Hariharan', apacheId: 'sangeethah', isPMC: false},
    {name: 'Sanjay Tripathi', apacheId: 'sanjaytripathi', isPMC: false},
    {name: 'Sanjeev Neelarapu', apacheId: 'sanjeev', isPMC: false},
    {name: 'Santhosh', apacheId: 'santhoshedukulla', isPMC: false},
    {name: 'Sateesh Chodapuneedi', apacheId: 'sateesh', isPMC: false},
    {name: 'Sonny Heng Chhen', apacheId: 'schhen', isPMC: false},
    {name: 'Sebastien Goasguen', apacheId: 'sebgoa', isPMC: true},
    {name: 'Sergey Levitskiy', apacheId: 'serg38', isPMC: false},
    {name: 'Abhishek Kumar', apacheId: 'shwstppr', isPMC: true},
    {name: 'Slavka Peleva', apacheId: 'slavkap', isPMC: true},
    {name: 'Sam Robertson', apacheId: 'slriv', isPMC: false},
    {name: 'Funs Kessen', apacheId: 'snuf', isPMC: false},
    {name: 'Sina Kashipazha', apacheId: 'soreana', isPMC: false},
    {name: 'Sowmya Krishnan', apacheId: 'sowmya', isPMC: false},
    {name: 'Sudhap', apacheId: 'sudhap', isPMC: false},
    {name: 'Suresh Anaparti', apacheId: 'sureshanaparti', isPMC: false},
    {name: 'Sven Vogel', apacheId: 'svogel', isPMC: true},
    {name: 'Venkata Swamy', apacheId: 'swamy', isPMC: false},
    {name: 'Simon Weller', apacheId: 'sweller', isPMC: true},
    {name: 'Will Stevens', apacheId: 'swill', isPMC: true},
    {name: 'Syed Ahmed', apacheId: 'syed', isPMC: true},
    {name: 'Srikanteswararao Talluri', apacheId: 'talluri', isPMC: false},
    {name: 'Prasanna', apacheId: 'tsp', isPMC: true},
    {name: 'Anh Tu Nguyen', apacheId: 'tuna', isPMC: false},
    {name: 'Vijayendra Bhamidipati', apacheId: 'vijayendrabvs', isPMC: false},
    {name: 'Vishesh Jindal', apacheId: 'vishesh', isPMC: false},
    {name: 'Vladimir Petrov', apacheId: 'vladi', isPMC: false},
    {name: 'Wei Zhou', apacheId: 'weizhou', isPMC: true},
    {name: 'Wido den Hollander', apacheId: 'widodh', isPMC: true},
    {name: 'William Chan', apacheId: 'willchan', isPMC: true},
    {name: 'Sheng Yang', apacheId: 'yasker', isPMC: false},
    {name: 'Yoshikazu Nojima', apacheId: 'ynojima', isPMC: false},
]

export default function Committers(): JSX.Element {
    return <>
        <table>
            <thead>
            <tr>
                <th><b>Name</b></th>
                <th><b>GitHub ID</b></th>
            </tr>
            </thead>
            <tbody>
            {committers
                .sort((c0, c1) => c0.name.localeCompare(c1.name))
                .map(v => (
                    <tr key={v.name}>
                        <td>{v.isPMC ? <b>{v.name}</b> : v.name}</td>
                        <td>{v.isPMC ? <b>{v.apacheId}</b> : v.apacheId}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}

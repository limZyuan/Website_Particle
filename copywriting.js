var codeOfConduct = {
    intro: {
        type: 'basic',
        paragraphs: [
            'SG Uni Travellers is the biggest chat and events community for University Students predominantly in Singapore. We constanty try our best to stray away from tough moderation, but we do have expectations for how our server members should behave.',
            'This is not a binding document and members should try their best to have the spirit listed in these guidelines. SG Uni Travellers\'s wants to be a community which supports individual growth, but we will not risk the comfort and safety of other members for such growth.',
            "'Team' or 'Admin Team' would refer to the entire SG Uni Travellers' team runnng the community, and this is inclusive of Admins, Moderators and Server Developers."
        ]   
    },
    conduct: {
        type: 'basic',
        paragraphs: [
            'SG Uni Travellers is the biggest chat and events community for University Students predominantly in Singapore. We constanty try our best to stray away from tough moderation, but we do have expectations for how our server members should behave.',
        ]   
    },
    moderation: {
        type: 'basic',
        paragraphs: [
            'SG Uni Travellers is the biggest chat and events community for University Students predominantly in Singapore. We constanty try our best to stray away from tough moderation, but we do have expectations for how our server members should behave.',
        ]   
    }
}

let intro = document.querySelector('.conductIntroduction')

codeOfConduct.intro.paragraphs.forEach(para => {
    intro.innerHTML += para + '<br/><br/>';
});

console.log(intro)
var codeOfConduct = {
  intro: {
    type: "basic",
    paragraphs: [
      "SG Uni Travellers is the biggest chat and events community for University Students predominantly in Singapore. We constanty try our best to stray away from tough moderation, but we do have expectations for how our server members should behave.",
      "This is not a binding document and members should try their best to have the spirit listed in these guidelines. SG Uni Travellers's wants to be a community which supports individual growth, but we will not risk the comfort and safety of other members for such growth.",
      "'Team' or 'Admin Team' would refer to the entire SG Uni Travellers' team runnng the community, and this is inclusive of Admins, Moderators and Server Developers.",
    ],
  },
  conduct: {
    type: "basic",
    paragraphs: [
      "1. Please be kind and courteous, friendly and professional. There’s no need to be mean or rude.",

      "2. Communicate in the open. Please do not direct message someone unless they’ve granted permission in the server or you need to discuss a moderation issue with staff.",

      "3. We are committed to providing a friendly, safe and welcoming environment for all, regardless of educational level, gender identity and expression, sexual orientation, disability, neurodivergence, personal appearance, body, race, ethnicity, age, religion, nationality, or other similar characteristic.",

      "4. This is a fully SFW server. Avoid doing anything that detracts from a welcoming and safe environment for everyone, such as but not only limited to, using a NSFW display name or flirting.",

      "5. People have differences in their opinions and every implementation or choice has its own trade-offs. It is unlikely that there is always a single right answer.",

      "6. When providing help, answer their question before making any other suggestions. Please keep unstructured critique to a minimum. If you critique someone and that perosn asks you to stop, respect that decision.",

      "7. We will exclude you from interaction if you insult, demean or harass anyone. Any form of disruptive beharvior to the server, be it through trolling when another asks a serious question, or making fun of another, is unwelcomed.",

      "8. Private harassment is fully unacceptable. No matter who you are, if you feel you have been or are being harassed or made uncomfortable by a community member, please contact one of the staff. Whether you’re a regular contributor or a newcomer, we care about making this community a safe place for you and we’ve got your back.",

      "9. This is not a bragging server and we do not welcome any form of bragging or member worship. Everyone has an equal position in the server, regardless of whether you are a newcomer or someone that has been in the server for long. Staff will not take sides and will moderate regardless of server rank or position.",

      "10. We do not allow any form of 'stirring-the-pot' or 'causing drama'. Anyone found guiltry will be dealt with the highest form of moderation.",

      "11. The server will always be free to join and leave, so long as these join-leaves are not counted as 'trolling'. Any form of undermining the efforts of the staff will be met with an instant, non-negotiatable ban.",

      "Remember that it’s your responsibility to make your fellow members comfortable. Everyone wants to get along and we are all here first and foremost because we want to better the University community in Singapore and connect with fellow University students. You will find that people will be eager to assume good intent and forgive as long as you earn their trust.",

      "Additionally, the staff team makes decisions for the betterment of the server. You might or might not like those decisions, but that is not the problem of the staff team as you are always free to leave the server. We will never stop or threaten any member from leaving the server. It is our job to ensure that the server stays on track, and decisions would almost always never eb able to please the entire community.",
    ],
  },
  moderation: {
    type: "basic",
    paragraphs: [
      "These are the policies for upholding the community's conduct. We especially need to hear from you if a staff member has crossed the line. Do contact anyone of the staff in the event where you feel that way, or if you feel that a situation is in need of moderation.",

      "1. Remarks that violate the code of conduct, including hateful, hurtful, oppressive, or exclusionary remarks, are not allowed. (Cursing is allowed, but never targeting another user, and never in a hateful manner.) Excessive cursing will get you banned.",

      "2. Remarks that staff find inappropriate, whether listed in the code of conduct or not, are also not allowed. Staff will respond to such remarks with a warning. If the warning is unheeded, the user will receive a strike, mute or may be kicked from the server (removed but not restricted from re-entering)",

      "3. If behavior persists, the user will be permanently removed from the server. We loosely follows a three strikes rule. These can be obtained in quick succession, or over many months. Members who show genuine effort to improve will be granted more leeway on “forgiving” these warnings, and particularly severe transgressions will not entail a second chance.",

      "4. Griping about bans in-channel is strictly not allowed and will result in more bans.",

      "5. Your free speech is not our problem. We recognize that this policy is a restrictive political stance. That is the intent. If you want a room with different rules, go create one. In the majority of cases, this is fine, and never requires anyone to be banned. A kick and a 2-minute ban to cool down is usually enough, if the warning didn’t do it.",

      "SG Uni Travellers aims to be a solid University community on the internet. We want you to grow your skills, your career, and the rest of yourself. Most of the server is strictly for-help and SFW, but some times sensitive topics might be talked about. We don’t have a blanket ban on these discussions, but we ask you to keep it within the boundaries of “professional.” These discussions are moderated very closely, make sure to adhere to this code of conduct.",

      "And if someone takes issue with something you said or did, resist the urge to be defensive. Just stop doing what it was they complained about and apologize. Even if you feel you were misinterpreted or unfairly accused, chances are good there was something you could’ve communicated better",
    ],
  },
};

let intro = document.querySelector(".conductIntroduction");
let conduct = document.querySelector(".conductConduct");
let moderation = document.querySelector(".conductModeration");

codeOfConduct.intro.paragraphs.forEach((para) => {
  intro.innerHTML += para + "<br/><br/>";
});
codeOfConduct.conduct.paragraphs.forEach((para) => {
  conduct.innerHTML += para + "<br/><br/>";
});
codeOfConduct.moderation.paragraphs.forEach((para) => {
  moderation.innerHTML += para + "<br/><br/>";
});

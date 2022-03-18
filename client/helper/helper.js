const embed = "https://www.youtube.com/embed/2B9obamIcug";
const share = "https://youtu.be/2B9obamIcug";

const convertToEmbed = (vidLink) => {
  let link = "https://www.youtube.com/embed/";
  const splitShare = vidLink.split('/')
  link += splitShare[3];
  return link;
}


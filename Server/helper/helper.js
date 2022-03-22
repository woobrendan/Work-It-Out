const convertToEmbed = (vidLink) => {
  let link = "https://www.youtube.com/embed/";
  const splitShare = vidLink.split('/')
  link += splitShare[3];
  return link;
}
import { useState } from 'react';

interface MessageHook {
  addItemToMessenger: (item: any) => void; // Adjust the type of 'item' based on your needs
}

const useMessage = (): MessageHook => {
  const [messages, setMessages] = useState<string[]>([]);

  const addItemToMessenger = (item: any) => {
    // Replace the hardcoded link with the current page's URL
    const articleLink = window.location.href;

    // Construct the Messenger conversation link with article details
    const messengerConversationLink = `http://m.me/61553134485424/?ref=INTENCION&messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0&text=Porosit%20kete%20artikull:%0AArtikull:%20${item.name}%0APershkrim:%20${item.description}%0ANgjyra:%20${item.color.name}%0AModel:%20${item.size.name}%0AArticle%20link:%20${articleLink}`;

    // Open the Messenger conversation link
    window.open(messengerConversationLink, '_blank');

    // Log the message to the console
    const message = `Sending article details to Messenger:\nName: ${item.name}\nDescription: ${item.description}\nColor: ${item.color.name}\nSize: ${item.size.name}\nArticle link: ${articleLink}`;
    setMessages((prevMessages) => [...prevMessages, message]);
    console.log(message);
  };

  return { addItemToMessenger };
};

export default useMessage;

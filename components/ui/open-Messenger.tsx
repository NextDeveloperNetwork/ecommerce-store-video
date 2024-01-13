import { useState } from 'react';

interface Item {
  name: string;
  description: string;
  color: {
    name: string;
  };
  size: {
    name: string;
  };
}

interface MessageHook {
  addItemToMessenger: (item: Item) => void;
}

const useMessage = (): MessageHook => {
  const [messages, setMessages] = useState<string[]>([]);

  const addItemToMessenger = (item: Item) => {
    const articleLink = window.location.href;

    const messengerConversationLink = `http://m.me/61553134485424/?ref=INTENCION&messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0&text=Porosit%20kete%20artikull:%0AArtikull:%20${item.name}%0APershkrim:%20${item.description}%0ANgjyra:%20${item.color.name}%0AModel:%20${item.size.name}%0AArticle%20link:%20${articleLink}`;

    window.open(messengerConversationLink, '_blank');

    const message = `Sending article details to Messenger:\nName: ${item.name}\nDescription: ${item.description}\nColor: ${item.color.name}\nSize: ${item.size.name}\nArticle link: ${articleLink}`;
    setMessages((prevMessages) => [...prevMessages, message]);
    console.log(message);
  };

  return { addItemToMessenger };
};

export default useMessage;

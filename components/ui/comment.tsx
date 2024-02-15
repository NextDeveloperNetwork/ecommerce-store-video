"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form"
import * as z from "zod";
import React,{ FormEvent, useState } from 'react'
import ReactStars from 'react-rating-star-with-type'



const formSchema = z.object({
  message: z.string().min(1).max(150),
 
})

interface Props {
  userId: string | null;
}

const Comment = ({
  userId
}: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        message: "",
      
    },
});
  const params = useParams()
  const [star, setStar] = useState(5);

  if (userId === null) {
    return null;
  }

    
    const onChange=(nextValue: React.SetStateAction<number>)=>{
      setStar(nextValue)
  }
   
  const onSubmit = async (e: FormEvent, values: z.infer<typeof formSchema>) => {
    e.preventDefault()
    try {
      // Add a console log statement here
      console.log("Form values submitted:", {userId: userId, message: values.message, rate: star});

      // Make the axios post request
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products/${params.productId}/comment`, {userId: userId, message: values.message, rate: star},{ withCredentials: true });
      window.location.reload();
    } catch (error) {
      // Handle any errors that occur during the submission
      console.error("Error submitting form:", error);
    }
    form.reset();
  };

   
      return (
        <form className="mb-4" onSubmit={(e) => onSubmit(e, form.getValues())}>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 overflow-hidden shadow-md">
          <div className="px-4 py-2 bg-white rounded-t-lg">
            <label className="sr-only">Your comment</label>
            <textarea
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 focus:ring-0 outline-none resize-none"
              placeholder="Write a comment..."
              id="message"
              {...form.register('message')}
            ></textarea>
          </div>
      
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out"
            >
              Post Comment
            </button>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 italic">Rate</span>
              <div className="inline">
                <ReactStars
                  onChange={onChange}
                  value={0}
                  isEdit={true}
                  activeColors={["red", "orange", "#FFCE00", "#9177FF", "#8568FC"]}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
  );
};
 
export default Comment;


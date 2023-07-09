import MainContent from "@/components/content/MainContent";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { DeliverooData } from "../../data.types";


// fetch Data on the server component if the page is render from Nextjs

async function getDeliverooPageData(): Promise<DeliverooData> {
  const response = await fetch(`${process.env.DELIVEROO_PAGE_URL}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`
    }
  })
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return response.json();
}



export default async function Home() {

  const pageData: DeliverooData = await getDeliverooPageData();

  // console.log("DATA HERE", pageData);
  
  return (
    <>
      <Header datas={pageData} />
      <MainContent datas={pageData}/>
      <Footer />
    </>
  )
}

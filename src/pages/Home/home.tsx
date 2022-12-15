import PageLayout from "../../components/Layout/Layout"
import Tasks from "../Tasks/Tasks"
import Task from "../Tasks/task"
import PageAccord from "./accordion"

export const Home = () => {
  return (
    <PageLayout>
      <div className="flex justify-center p-7">
        <div className="grid basis-10/12 gap-8 grid-cols-2 w-max pr-8">
          <Tasks />
          <div className="text-center font-roboto">
            <br />
            <hr className="border-1.5 border-red-800 mt-[10px] pb-5" />
            <Task />
          </div>
        </div>
        {/* <div className="flex justify-center basis-1/4 w-max">
          <PageAccord />
        </div> */}
      </div>

      {/* <div className="relative ml-5 mr-5">
        <div className="static">
        <a className="hover:text-red-800" href="/news">
                <h1 className="flex justify-center font-bold uppercase pb-6">
                  Новости
                </h1>
              </a>
        <News />
        <div className="inline-block mx-2 max-h-10">
              
              <Tasks />
              
            </div>
        
        </div>

      </div> */}
    </PageLayout>
  )
}

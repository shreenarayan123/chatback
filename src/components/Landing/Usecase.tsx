import PageTile from '@/components/common/PageTile'
import Usecases from '@/components/Usecases'

const Usecase = () => {
  return (
    <div className="container flex flex-col">
      <div className="flex-center">
        <PageTile title="Use Cases" dotBgColor="bg-pink-400" />
      </div>
      <div className="mt-15 flex-center flex-col">
        <h2 className="main-h2">Versatile Solutions for Diverse Needs</h2>
        <p className="main-p">
          Chatback adapts to various industries, enhancing support and <br />
          engagement across the board.
        </p>
      </div>
      <div className="mt-15">
        <Usecases />
      </div>
    </div>
  )
}

export default Usecase

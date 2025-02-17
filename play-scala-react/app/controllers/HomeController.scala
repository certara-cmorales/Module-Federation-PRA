package controllers

import javax.inject._
import play.api._
import play.api.mvc._

import scala.concurrent.ExecutionContext

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(cc: ControllerComponents, env: Environment)(implicit ec: ExecutionContext) extends AbstractController(cc) {


  private def clientPath(): String =  "/client/build/"

  /**
   * Serves static files, falling back to index.html for React routes
   */
  def serveReact(file: String) = Action {
    val requestedFile = env.getFile(this.clientPath().concat(file));
    if (requestedFile.exists() && requestedFile.isFile) {
      Ok.sendFile(requestedFile);
    } else {
      Ok.sendFile(env.getFile(this.clientPath().concat("index.html")))
    }
  }
  
}

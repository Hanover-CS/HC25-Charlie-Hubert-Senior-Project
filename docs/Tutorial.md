# When to use each type of Layers in OpenLayers
OpenLayers makes it easy to put a dynamic map in any web page. It can display map tiles, vector data and markers loaded from any source. 
## Layers:
A layer is a visual representation of data from a source. 
### OpenLayers has four basic types of layers:

**1. TileLayer** - Renders sources that provide tiled images in grids that are organized by zoom levels for specific resolutions.
    
- Essentially the base layer
- I used a tile layer to set up my Open Street Map which is the base of my project.
- My project with the tilelayer:
   ![Screenshot 2024-10-17 133806](https://github.com/user-attachments/assets/4e62de95-5589-45e0-9789-722b34ffaa84)
- My project without the tilelayer:
   ![Screenshot 2024-10-17 133832](https://github.com/user-attachments/assets/77e58e93-a818-4777-ab15-2614b5866fdd)
#### How to use a TileLayer:
- Create a const variable using whatever name fits your project
- Then add a map or something to the source property of the tile layer
  ![Screenshot 2024-10-17 135401](https://github.com/user-attachments/assets/7df49fd5-1397-49af-afff-016072f9177e)
- This code will go inside of your main javascript, it will not go inside any functions and once you use it you do not need to use it again
- The only place you need to call the variable of the tilelayer is when you are initializing the map
- Set the tilelayer variable as the view property of the map
- All done!
  
**2. VectorLayer**

**3. ImageLayer**

**4. VectorTileLayer**

var rain=0; 
function useItem(x, y, z, itemId, blockId, side) 
{ 
if(blockId==79&&rain==0) 
{ 
rain=1; 
} 
else if(blockId&&rain==1) 
{ 
rain=0; 
} 
} 
  
function modTick() 
{ 
if (rain==1) 
{ 
setTile(getPlayerX()+1, getPlayerY()+2, getPlayerZ(), 9); 
setTile(getPlayerX(), getPlayerY()+2, getPlayerZ()+1, 9); 
setTile(getPlayerX()+1, getPlayerY()+2, getPlayerZ()+1, 9); 
setTile(getPlayerX(), getPlayerY()+2, getPlayerZ()-1, 9); 
setTile(getPlayerX()-1, getPlayerY()+2, getPlayerZ(), 9); 
setTile(getPlayerX()-1, getPlayerY()+2, getPlayerZ()-1, 9); 
  
Level.destroyBlock(getPlayerX()+1, getPlayerY()+2, getPlayerZ()); 
Level.destroyBlock(getPlayerX(), getPlayerY()+2, getPlayerZ()+1); 
Level.destroyBlock(getPlayerX()+1, getPlayerY()+2, getPlayerZ()+1); 
Level.destroyBlock(getPlayerX(), getPlayerY()+2, getPlayerZ()-1); 
Level.destroyBlock(getPlayerX()-1, getPlayerY()+2, getPlayerZ()); 
Level.destroyBlock(getPlayerX()-1, getPlayerY()+2, getPlayerZ()-1); 
} 
if (getTile (getPlayerX (),getPlayerY ()-1.7,getPlayerZ ()) == 78)
{
setTile(getPlayerX()+1, getPlayerY()+2, getPlayerZ(), 78); 
setTile(getPlayerX(), getPlayerY()+2, getPlayerZ()+1, 78); 
setTile(getPlayerX()+1, getPlayerY()+2, getPlayerZ()+1, 78); 
setTile(getPlayerX(), getPlayerY()+2, getPlayerZ()-1, 78); 
setTile(getPlayerX()-1, getPlayerY()+2, getPlayerZ(), 78); 
setTile(getPlayerX()-1, getPlayerY()+2, getPlayerZ()-1, 78); 
  
Level.destroyBlock(getPlayerX()+1, getPlayerY()+2, getPlayerZ()); 
Level.destroyBlock(getPlayerX(), getPlayerY()+2, getPlayerZ()+1); 
Level.destroyBlock(getPlayerX()+1, getPlayerY()+2, getPlayerZ()+1); 
Level.destroyBlock(getPlayerX(), getPlayerY()+2, getPlayerZ()-1); 
Level.destroyBlock(getPlayerX()-1, getPlayerY()+2, getPlayerZ()); 
Level.destroyBlock(getPlayerX()-1, getPlayerY()+2, getPlayerZ()-1); 
}
else
{
  setTile(getPlayerX()+1, getPlayerY()+2, getPlayerZ(), 9); 
setTile(getPlayerX(), getPlayerY()+2, getPlayerZ()+1, 9); 
setTile(getPlayerX()+1, getPlayerY()+2, getPlayerZ()+1, 9); 
setTile(getPlayerX(), getPlayerY()+2, getPlayerZ()-1, 9); 
setTile(getPlayerX()-1, getPlayerY()+2, getPlayerZ(), 9); 
setTile(getPlayerX()-1, getPlayerY()+2, getPlayerZ()-1, 9); 
  
Level.destroyBlock(getPlayerX()+1, getPlayerY()+2, getPlayerZ()); 
Level.destroyBlock(getPlayerX(), getPlayerY()+2, getPlayerZ()+1); 
Level.destroyBlock(getPlayerX()+1, getPlayerY()+2, getPlayerZ()+1); 
Level.destroyBlock(getPlayerX(), getPlayerY()+2, getPlayerZ()-1); 
Level.destroyBlock(getPlayerX()-1, getPlayerY()+2, getPlayerZ()); 
Level.destroyBlock(getPlayerX()-1, getPlayerY()+2, getPlayerZ()-1);
}
}


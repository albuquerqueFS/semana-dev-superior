package com.devsuperior.dspesquisa.resources;

import com.devsuperior.dspesquisa.dto.GameDTO;
import com.devsuperior.dspesquisa.entities.Game;
import com.devsuperior.dspesquisa.repository.GameRepository;
import com.devsuperior.dspesquisa.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/games")
public class GameResource {

    @Autowired
    private GameService service;

    @GetMapping
    public ResponseEntity<List<GameDTO>> findAll() {
        List<GameDTO> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }
}

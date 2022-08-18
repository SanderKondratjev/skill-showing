package com.task.skillshowing;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class SkillShowingApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void getStatusOkWhenGettingAllSectors() throws Exception {
        this.mockMvc
                .perform(get("/api/v1/sectors/"))
                .andDo(print()).andExpect(status().isOk());
    }

    @Test
    void getStatusOkWhenGettingOneSector() throws Exception {
        this.mockMvc
                .perform(get("/api/v1/sectors/{id}", "1"))
                .andDo(print()).andExpect(status().isOk());
    }
}
